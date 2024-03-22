import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Titular } from '../../../../../Models/Titular';
// import { CLIENTES } from '../../../../../Data/Dados-clientes';
import { Router } from '@angular/router';
import { ApiService } from '../../../../../Services/api.service';
import { cpfLengthValidator } from '../../../../../Validators/cpf-length.validator';


@Component({
  selector: 'app-destinatario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './destinatario.component.html',
  styleUrl: './destinatario.component.css'
})
export class DestinatarioComponent {
  idConta : number = 1;// id de teste
  errorMessage!: string;
  valor?: number;
  titularEncontrado: Titular | undefined;

  destinatario = new FormGroup({
    cpf: new FormControl('', [Validators.required, cpfLengthValidator()]),
  });

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  procurarCPF() {
    const cpfInput = this.destinatario.get('cpf')?.value;
    const cpfNumero = parseInt(cpfInput!);

    if (cpfNumero === null || cpfNumero <= 10) {
      //TODO conferir mensagem
      this.errorMessage = 'CPF inválido, confira novamente';
      return
    }

    this.apiService.GetTitulares().subscribe(
      titulares => {
        this.titularEncontrado = titulares.find(
          titular => titular.cpf === cpfInput
        );

        if (!this.titularEncontrado) {
          this.errorMessage = 'CPF não encontrado';
        }
      },
      error => {
        console.error('Erro ao buscar titulares:', error);
      }
    );

    localStorage.setItem('cpfDestino', cpfNumero.toString());
    this.router.navigateByUrl(`/cliente/nova/transferencia/validacao`);

  }

  // get cpf() {
  //   return this.destinatario.get('cpf');
  // }

  // validarCPF(cpf: string): boolean {
  //   const clienteEncontrado = this.clientes.find(cliente => cliente.cpf === cpf);
  //   return clienteEncontrado !== undefined;
  // }

  // salvarValor() {
  //   const cpfDestino: string = (this.cpf?.value ?? '').toString();
  //   const cpfValido = this.validarCPF(cpfDestino);
  //   if (cpfValido) {
  //     localStorage.setItem('cpfDestino', cpfDestino.toString());
  //     this.router.navigateByUrl('/cliente/nova/transferencia/validacao');
  //   } else {
  //     this.isCpfValido = false;
  //   }

  // }
}
