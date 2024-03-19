import { Component } from '@angular/core';

@Component({
  selector: 'app-confirmacao-transferencia',
  standalone: true,
  imports: [],
  templateUrl: './confirmacao-transferencia.component.html',
  styleUrl: './confirmacao-transferencia.component.css'
})
export class ConfirmacaoTransferenciaComponent {
  idTransacao: number = 6546514365;
  valor: any;
  dataTransacao: any;

  constructor() { }

  ngOnInit(): void {
    this.valor = localStorage.getItem('valorTransferencia');
    this.dataTransacao = localStorage.getItem('dataTransferencia');
  }
}
