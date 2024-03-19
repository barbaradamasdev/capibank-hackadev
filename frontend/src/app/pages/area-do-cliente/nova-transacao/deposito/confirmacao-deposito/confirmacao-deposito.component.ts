import { Component } from '@angular/core';

@Component({
  selector: 'app-confirmacao-deposito',
  standalone: true,
  imports: [],
  templateUrl: './confirmacao-deposito.component.html',
  styleUrl: './confirmacao-deposito.component.css'
})
export class ConfirmacaoDepositoComponent {
  idTransacao: number = 6546514365;
  valor: any;
  dataTransacao: any;

  constructor() { }

  ngOnInit(): void {
    this.valor = localStorage.getItem('valorDeposito');
    this.dataTransacao = localStorage.getItem('dataDeposito');
  }
}
