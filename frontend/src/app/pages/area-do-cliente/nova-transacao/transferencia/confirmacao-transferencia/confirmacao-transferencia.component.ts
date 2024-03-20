import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-confirmacao-transferencia',
  standalone: true,
  imports: [],
  templateUrl: './confirmacao-transferencia.component.html',
  styleUrl: './confirmacao-transferencia.component.css'
})
export class ConfirmacaoTransferenciaComponent {
  @ViewChild('componentToPrint', {static: false}) componentToPrint!: ElementRef;

  idTransacao: number = 6546514365;
  valor: any;
  dataTransacao: any;
  cpfDestino: any;
  nome: any;
  numeroConta: any;
  tipoConta: any;

  constructor() { }

  ngOnInit(): void {
    this.dataTransacao = localStorage.getItem('dataTransferencia');
    this.cpfDestino = localStorage.getItem("transferencia-feita-cpf");
    this.nome = localStorage.getItem("transferencia-feita-nome");
    this.numeroConta = localStorage.getItem("transferencia-feita-numeroConta");
    this.tipoConta = localStorage.getItem("transferencia-feita-tipoConta");
    this.valor = localStorage.getItem('valorTransferencia');

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
