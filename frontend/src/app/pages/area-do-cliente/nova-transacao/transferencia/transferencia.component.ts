import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-transferencia',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './transferencia.component.html',
  styleUrl: './transferencia.component.css'
})
export class TransferenciaComponent {
  idConta : number = 1;// id de teste
  errorMessage!: string;
  valor?: number;

  transferencia = new FormGroup({
    valor: new FormControl('', [Validators.required, Validators.min(0)]),
  });

   constructor(
    private router: Router
  ) {}

  armazenarValor() {
    const valorInput = this.transferencia.get('valor')?.value;
    const valorTransferencia = parseFloat(valorInput!);

    if (valorTransferencia === null || valorTransferencia <= 0) {
      this.errorMessage = 'O valor não pode ser menor ou igual a zero';
      return;
    }
    //TODO validacao caso saldo negativo

    localStorage.setItem('valorTransferencia', valorTransferencia.toString());
    this.router.navigateByUrl(`/cliente/nova/transferencia/destinatario`);

  }
}

//cpf
//33333333333
