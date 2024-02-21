import { Component } from '@angular/core';
import { Transacao } from '../../Models/Transacao';
import { TransacaoTipo } from '../../Models/TransacaoTipo';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-historico-transacoes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './historico-transacoes.component.html',
  styleUrl: './historico-transacoes.component.css'
})
export class HistoricoTransacoesComponent {

  aplicarEstiloOverflow: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.url;

        if (url.endsWith('/historico')) {
          this.aplicarEstiloOverflow = true;
        } else {
          this.aplicarEstiloOverflow = false;
        }
      }
    });
  }

  transacoes: Transacao[] =[
    {transacaoTipo: TransacaoTipo.entrada, tipo:'Pix Recebido', valor: 1000.00, motivo:'José Pedro', data: '15/01/2024'},
    {transacaoTipo: TransacaoTipo.saida, tipo:'Pix Enviado', valor: 100.00, motivo:'Maria Antonia', data: '15/01/2024'},
    {transacaoTipo: TransacaoTipo.saida, tipo:'Pgto Boleto', valor: 500.00, motivo:'Energia Elétrica', data: '17/01/2024'},
    {transacaoTipo: TransacaoTipo.saida, tipo:'Transferência enviada', valor: 200.00, motivo:'Poupança', data: '20/01/2024'},
    {transacaoTipo: TransacaoTipo.entrada, tipo:'Pix Recebido', valor: 1000.00, motivo:'Sandra Lima',  data: '21/01/2024'},
    {transacaoTipo: TransacaoTipo.saida, tipo:'Pix Enviado', valor: 100.00, motivo:'Anderson José',  data: '25/01/2024'},
    {transacaoTipo: TransacaoTipo.saida, tipo:'Pgto Boleto', valor: 100.00, motivo:'Condominio',  data: '29/01/2024'},
    {transacaoTipo: TransacaoTipo.entrada, tipo: 'Salário', valor: 3000.00, motivo: 'Recebimento Mensal', data: '01/03/2024'},
    {transacaoTipo: TransacaoTipo.saida, tipo: 'Compras', valor: 150.00, motivo: 'Supermercado', data: '03/03/2024'},
    {transacaoTipo: TransacaoTipo.saida, tipo: 'Pagamento Cartão', valor: 500.00, motivo: 'Fatura de Cartão de Crédito', data: '05/03/2024'},
    {transacaoTipo: TransacaoTipo.entrada, tipo: 'Transferência recebida', valor: 200.00, motivo: 'Recebido de Amigo', data: '08/03/2024'},
    {transacaoTipo: TransacaoTipo.entrada, tipo: 'Venda recebida', valor: 800.00, motivo: 'Eletrônicos Usados', data: '10/03/2024'},
    {transacaoTipo: TransacaoTipo.saida, tipo: 'Pix QR Code', valor: 50.00, motivo: 'Cinema', data: '12/03/2024'},
    {transacaoTipo: TransacaoTipo.saida, tipo: 'Transferência enviada', valor: 100.00, motivo: 'Investimento', data: '15/03/2024'},
    {transacaoTipo: TransacaoTipo.entrada, tipo: 'Pix Recebido', valor: 1200.00, motivo: 'Presente de Aniversário', data: '18/03/2024'},
    {transacaoTipo: TransacaoTipo.saida, tipo: 'Pgto Boleto', valor: 80.00, motivo: 'Assinatura Streaming', data: '20/03/2024'},
    {transacaoTipo: TransacaoTipo.entrada, tipo: 'Transferência recebida', valor: 300.00, motivo: 'Devolução de Empréstimo', data: '22/03/2024'},

  ]

  formatarValorTransacao(t: Transacao) {
    let operacaoTransacao = (t.transacaoTipo === TransacaoTipo.saida) ? '-' : '+';
    return `${operacaoTransacao}${t.valor}`;
  }

}
