import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-confirmacao-saque',
  standalone: true,
  imports: [],
  templateUrl: './confirmacao-saque.component.html',
  styleUrl: './confirmacao-saque.component.css'
})
export class ConfirmacaoSaqueComponent {
  @ViewChild('componentToPrint', {static: false}) componentToPrint!: ElementRef;

  idTransacao: number = 6546514365;
  valor: any;
  dataTransacao: any;

  constructor() { }

  ngOnInit(): void {
    this.valor = localStorage.getItem('valorSaque');
    this.dataTransacao = localStorage.getItem('dataSaque');
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
