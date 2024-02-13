import { Component } from '@angular/core';
import { Transacao } from '../../Models/Transacao';

@Component({
  selector: 'app-historico-transacoes',
  standalone: true,
  imports: [],
  templateUrl: './historico-transacoes.component.html',
  styleUrl: './historico-transacoes.component.css'
})
export class HistoricoTransacoesComponent {
  
  transacoes: Transacao[] =[
    {tipo:'Pix Recebido', valor: 1000.00, motivo:'José Pedro', data: '15/01/2024'},
    {tipo:'Pix Enviado', valor: 100.00,motivo:'Maria Antonia', data: '15/01/2024'},
    {tipo:'Pgto Boleto', valor: 500.00, motivo:'Energia Elétrica', data: '17/01/2024'},
    {tipo:'Transferência', valor: 200.00, motivo:'Poupança', data: '20/01/2024'},
    {tipo:'Pix Recebido', valor: 1000.00,motivo:'Sandra Lima',  data: '21/01/2024'},
    {tipo:'Pix Enviado', valor: 100.00,motivo:'Anderson José',  data: '25/01/2024'},
    {tipo:'Pgto Boleto', valor: 100.00,motivo:'Condominio',  data: '29/01/2024'}
  ]
    
  
}
