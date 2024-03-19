import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-saque',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './saque.component.html',
  styleUrl: './saque.component.css'
})
export class SaqueComponent {
  saque = new FormGroup({
    valor: new FormControl('', [Validators.required, Validators.min(0)]),
  });

  get valor() {
    return this.saque.get('valor');
  }

  constructor() {}

  salvarValor() {
    const valorSaque = this.valor?.value;
    if (valorSaque !== null && valorSaque !== undefined) {
      localStorage.setItem('valorSaque', valorSaque.toString());
      const data = new Date();
      localStorage.setItem('dataSaque', data.toString());
    }
  }

}
