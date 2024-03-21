import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../../../Services/api.service';
import { Transacao } from '../../../../../Models/Transacao';

@Component({
  selector: 'app-confirmacao-deposito',
  standalone: true,
  imports: [],
  templateUrl: './confirmacao-deposito.component.html',
  styleUrl: './confirmacao-deposito.component.css'
})
export class ConfirmacaoDepositoComponent {
  @ViewChild('componentToPrint', {static: false}) componentToPrint!: ElementRef;

  idTransacao: any;
  valor: any;
  dataTransacao: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.apiService.GetTransacoes().subscribe(
      (transacoes: Transacao[]) => {
        // FIXME enviar id da transacao no controller e enviar pela mudanca de rota na pagina da transacao
        transacoes.sort((a, b) => new Date(b.dataTransacao).getTime() - new Date(a.dataTransacao).getTime());
        const ultimaTransacao = transacoes[0];

        if (ultimaTransacao) {
          this.idTransacao = ultimaTransacao.id;
          this.valor = ultimaTransacao.valor;
          this.dataTransacao = ultimaTransacao.dataTransacao;
        } else {
          console.error('Nenhuma transação encontrada');
        }
      },
      error => {
        console.error('Erro ao buscar transações:', error);
      }
    );
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
