import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Titular } from '../../../../../Models/Titular';
import { ApiService } from '../../../../../Services/api.service';
import { ContaCorrente } from '../../../../../Models/ContaCorrente';

@Component({
  selector: 'app-validacao',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './validacao.component.html',
  styleUrl: './validacao.component.css'
})
export class ValidacaoComponent implements OnInit {
  idConta : number = this.apiService.idTeste; //FIXME remover ao criar login
  titularEncontrado: Titular | undefined;
  contaEncontrada: ContaCorrente | undefined;
  idContaEncontrada?: number;
  idTitularDestino?: number;
  nome: any;
  numeroConta: any;
  tipoConta: any;
  cpfDestino?: string;
  valorTransacao?: number;

  validacao = new FormGroup({
    cpf: new FormControl(''),
    nome: new FormControl(''),
    numeroConta: new FormControl(''),
    tipoConta: new FormControl(''),
    valorTransacao: new FormControl(''),
  });

  constructor(
    private apiService: ApiService,
    private router: Router,
    ) {
      this.validacao.disable();
    }

  transferirValor () {
    if (this.valorTransacao !== undefined && this.idContaEncontrada !== undefined && this.cpfDestino !== undefined) {
      this.apiService.PostTransferencia(this.valorTransacao, this.cpfDestino, this.idConta).subscribe(
        (response: any) => {
          if (typeof response === 'object') {
            console.log("Transação bem-sucedida. ID da transação:", response);
            this.router.navigateByUrl(`/cliente/nova/transferencia/ok/${response.id}`);
          } else {
            console.error("Erro ao efetuar o saque:", response);
            //TODO validacao caso saldo negativo, conta bloqueada etc
          }
         },
         error => {
          console.error("Erro ao efetuar o saque:", error);
         }
       );
    }
  }

  ngOnInit(): void {
    const cpfLocalStorage = localStorage.getItem('cpfDestino');
    this.cpfDestino = cpfLocalStorage?.toString();
    const valorLocalStorage = localStorage.getItem('valorTransferencia');
    this.valorTransacao = parseInt(valorLocalStorage!);

    if (this.cpfDestino && this.valorTransacao) {
      this.validacao.patchValue({
        cpf: this.cpfDestino,
        valorTransacao: `R$ ${this.valorTransacao}`
      });
    }

    this.apiService.GetTitulares().subscribe(
      titulares => {
        this.titularEncontrado = titulares.find(
          titular => titular.cpf === this.cpfDestino
        );

        if (this.titularEncontrado) {
          this.idTitularDestino = this.titularEncontrado.id;
          this.nome = this.titularEncontrado?.nome;

          this.apiService.GetContasCorrentes().subscribe(
            contas => {
              this.contaEncontrada = contas.find(
                conta => conta.titular.id === this.idTitularDestino
              );

              if (this.contaEncontrada) {
                this.numeroConta = this.contaEncontrada.numeroConta
                this.tipoConta = "Conta Corrente"
                this.idContaEncontrada = this.contaEncontrada.id;
                this.transferirValor()
              } else {
                console.log('Conta não encontrada para o titular com id:', this.idTitularDestino);
              }
            },
            error => {
              console.error('Erro ao buscar contas correntes:', error);
            }
          );
        }
      },
      error => {
        console.error('Erro ao obter titulares:', error);
      }
    );
  }
}
