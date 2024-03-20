import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-deposito',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './deposito.component.html',
  styleUrl: './deposito.component.css'
})
export class DepositoComponent {
  deposito = new FormGroup({
    valor: new FormControl('', [Validators.required, Validators.min(0)]),
  });

  get valor() {
    return this.deposito.get('valor');
  }

  constructor() {}

  salvarValor() {
    const valorDeposito = this.valor?.value;
    if (valorDeposito !== null && valorDeposito !== undefined) {
      localStorage.setItem('valorDeposito', valorDeposito.toString());
      const data = new Date();
      localStorage.setItem('dataDeposito', data.toString());
    }
  }
}
