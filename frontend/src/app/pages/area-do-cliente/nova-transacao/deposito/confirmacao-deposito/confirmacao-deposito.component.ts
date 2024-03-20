import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-confirmacao-deposito',
  standalone: true,
  imports: [],
  templateUrl: './confirmacao-deposito.component.html',
  styleUrl: './confirmacao-deposito.component.css'
})
export class ConfirmacaoDepositoComponent {
  @ViewChild('componentToPrint', {static: false}) componentToPrint!: ElementRef;

  idTransacao: number = 6546514365;
  valor: any;
  dataTransacao: any;

  constructor() { }

  ngOnInit(): void {
    this.valor = localStorage.getItem('valorDeposito');
    this.dataTransacao = localStorage.getItem('dataDeposito');
  }

  imprimir() {
    const conteudo = this.componentToPrint.nativeElement.innerHTML;
    const janelaImpressao = window.open('', '_blank', 'width=600,height=600');
    janelaImpressao?.document.write('<html><head><title>Comprovante de Depósito</title></head><body>');
    janelaImpressao?.document.write(conteudo);
    janelaImpressao?.document.write('</body></html>');
    janelaImpressao?.document.close();
    janelaImpressao?.print();
  }
}
