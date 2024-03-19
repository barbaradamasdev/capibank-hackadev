import { Component } from '@angular/core';

@Component({
  selector: 'app-confirmacao-saque',
  standalone: true,
  imports: [],
  templateUrl: './confirmacao-saque.component.html',
  styleUrl: './confirmacao-saque.component.css'
})
export class ConfirmacaoSaqueComponent {
  idTransacao: number = 6546514365;
  valor: any;
  dataTransacao: any;

  constructor() { }

  ngOnInit(): void {
    this.valor = localStorage.getItem('valorSaque');
    this.dataTransacao = localStorage.getItem('dataSaque');
  }
}
