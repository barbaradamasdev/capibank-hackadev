import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-transferencia',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './transferencia.component.html',
  styleUrl: './transferencia.component.css'
})
export class TransferenciaComponent {
  transferencia = new FormGroup({
    valor: new FormControl('', [Validators.required, Validators.min(0)]),
  });

  get valor() {
    return this.transferencia.get('valor');
  }

  constructor() {}

  salvarValor() {
    const valorTransferencia = this.valor?.value;
    if (valorTransferencia !== null && valorTransferencia !== undefined) {
      localStorage.setItem('valorTransferencia', valorTransferencia.toString());
      const data = new Date();
      localStorage.setItem('dataTransferencia', data.toString());
    }
  }
}
