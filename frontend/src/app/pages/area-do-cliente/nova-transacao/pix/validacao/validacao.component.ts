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
export class ValidacaoComponentPix {
  idConta : number = this.apiService.idTitularLogado; //FIXME remover ao criar login
  titularEncontrado: Titular | undefined;
  contaEncontrada: ContaCorrente | undefined;
  idContaEncontrada?: number;
  idTitularDestino?: number;
  nome: any;
  numeroConta: any;
  tipoConta: any;
  cpfDestino?: string;
  chave?: any;
  valorTransacao?: number;
  errorMessage!: string;


  validacao = new FormGroup({
    chavePix: new FormControl(''),
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

  pixValor () {
    if (this.valorTransacao !== undefined && this.idContaEncontrada !== undefined && this.cpfDestino !== undefined) {
      this.apiService.PostPix(this.valorTransacao, this.cpfDestino, this.idConta).subscribe(
        (response: any) => {
          if (typeof response === 'object') {
            console.log("Transação bem-sucedida. ID da transação:", response);
            this.router.navigateByUrl(`/cliente/nova/pix/ok/${response.id}`);
          } else {
            console.error("Erro ao efetuar o saque:", response);
            if (response === "Conta destino não encontrada") {
              this.errorMessage = "A conta está bloqueada ou inativa";
            }
          }
        },
        (error: any) => {
          console.error("Erro ao efetuar o saque:", error);
          if (error.status === 404) {
            this.errorMessage = "A conta está bloqueada ou inativa";
          }
        }
      );
    }
  }

  ngOnInit(): void {
    this.cpfDestino = localStorage.getItem('cpfDestino') ?? '';


    if (localStorage.getItem('chavePix')?.includes('@')) {
      const chaveString = localStorage.getItem('chavePix') ?? '';
      this.chave = chaveString;
    } else {
      const chaveNumero = parseInt(localStorage.getItem('chavePix') ?? '');
      this.chave = chaveNumero;
    }

    const valorStorage = localStorage.getItem('valorPix');
    this.valorTransacao = parseInt(valorStorage!);

    if (this.cpfDestino && this.valorTransacao) {
      this.validacao.patchValue({
        cpf: this.cpfDestino,
        chavePix: this.chave,
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

  confirmar(){
    this.pixValor()
  }
}
