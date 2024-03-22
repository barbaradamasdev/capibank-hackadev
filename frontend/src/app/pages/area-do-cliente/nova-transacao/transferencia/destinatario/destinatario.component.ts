import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Titular } from '../../../../../Models/Titular';
import { Router } from '@angular/router';
import { ApiService } from '../../../../../Services/api.service';


@Component({
  selector: 'app-destinatario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './destinatario.component.html',
  styleUrl: './destinatario.component.css'
})
export class DestinatarioComponent {
  idTitular : number = 1;// id de teste
  errorMessage!: string;
  valor?: number;
  titularEncontrado: Titular | undefined;

  destinatario = new FormGroup({
    cpf: new FormControl('', [
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(11),
    ]),
  });

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  procurarCPF() {
    const cpfInput = this.destinatario.get('cpf')?.value;
    const cpfNumero = parseInt(cpfInput!);

    if (cpfInput === null) {
      this.errorMessage = 'Precisamos de um CPF para finalizar a transação';
      return;
    }

    // if (cpfNumero === null) {
    //   this.errorMessage = 'CPF inválido, confira novamente';
    // }

    this.apiService.GetTitulares().subscribe(
      titulares => {
        this.titularEncontrado = titulares.find(
          titular => titular.cpf === cpfInput?.toString()
        );

        if (this.titularEncontrado) {
          this.errorMessage = 'CPF encontrado';
          localStorage.setItem('cpfDestino', cpfNumero.toString());
          this.router.navigateByUrl(`/cliente/nova/transferencia/validacao`);
        } else {
          this.errorMessage = 'CPF não encontrado';
        }
      },
      error => {
        console.error('Erro ao obter titulares:', error);
      }
      );
  }
}
