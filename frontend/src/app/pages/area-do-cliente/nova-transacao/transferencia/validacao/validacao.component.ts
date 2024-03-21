import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
// import { CLIENTES } from '../../../../../Data/Dados-clientes';
import { Titular } from '../../../../../Models/Titular';

@Component({
  selector: 'app-validacao',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './validacao.component.html',
  styleUrl: './validacao.component.css'
})
export class ValidacaoComponent {
  clientes: Titular[] = [];
  nome: any;
  numeroConta: any;
  tipoConta: any;
  cpfDestino: any;
  valorTransacao: any;

  validacao = new FormGroup({
    cpf: new FormControl(''),
    nome: new FormControl(''),
    numeroConta: new FormControl(''),
    tipoConta: new FormControl(''),
    valorTransacao: new FormControl(''),
  });

  constructor() {
    this.validacao.disable();
  }

  // ngOnInit(): void {
  //   this.cpfDestino = localStorage.getItem('cpfDestino');
  //   const clienteEncontrado = this.clientes.find(cliente => cliente.cpf === this.cpfDestino);

  //   if (clienteEncontrado) {
  //     this.nome = clienteEncontrado.nome;
  //     this.numeroConta = clienteEncontrado.numeroConta;
  //     this.tipoConta = clienteEncontrado.tipoConta;

  //     this.validacao.patchValue({
  //       cpf: this.cpfDestino ? this.cpfDestino : '',
  //       nome: this.nome ? this.nome : '',
  //       numeroConta: this.numeroConta ? this.numeroConta : '',
  //       tipoConta: this.tipoConta ? this.tipoConta : '',
  //       valorTransacao: 'R$ ' + localStorage.getItem('valorTransferencia')
  //     });

  //     localStorage.setItem("transferencia-feita-cpf", this.cpfDestino);
  //     localStorage.setItem("transferencia-feita-nome", this.nome);
  //     localStorage.setItem("transferencia-feita-numeroConta", this.numeroConta);
  //     localStorage.setItem("transferencia-feita-tipoConta", this.tipoConta);
  //   } else {
  //     console.log('Cliente não encontrado');
  //   }
  // }


}
