import { Component } from '@angular/core';
import { CabecalhoAreaInternaComponent } from "../../componentes/cabecalho-area-interna/cabecalho-area-interna.component";
import { SecaoSaldoComponent } from "../../componentes/secao-saldo/secao-saldo.component";
import { MenuLateralComponent } from "../../componentes/menu-lateral/menu-lateral.component";
import { HistoricoTransacoesComponent } from "../../componentes/historico-transacoes/historico-transacoes.component";

@Component({
    selector: 'app-historico-de-transacao',
    standalone: true,
    templateUrl: './historico-de-transacao.component.html',
    styleUrl: './historico-de-transacao.component.css',
    imports: [CabecalhoAreaInternaComponent, SecaoSaldoComponent, MenuLateralComponent, HistoricoTransacoesComponent]
})
export class HistoricoDeTransacaoComponent {

}
