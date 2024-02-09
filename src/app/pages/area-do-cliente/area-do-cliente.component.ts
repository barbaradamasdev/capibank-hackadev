import { Component } from '@angular/core';
import { HistoricoTransacoesComponent } from "../../componentes/historico-transacoes/historico-transacoes.component";
import { AcessoRapidoAreaInternaComponent } from "../../componentes/acesso-rapido-area-interna/acesso-rapido-area-interna.component";
import { MenuLateralComponent } from "../../componentes/menu-lateral/menu-lateral.component";
import { SecaoSaldoComponent } from "../../componentes/secao-saldo/secao-saldo.component";
import { CabecalhoAreaInternaComponent } from "../../componentes/cabecalho-area-interna/cabecalho-area-interna.component";

@Component({
    selector: 'app-area-do-cliente',
    standalone: true,
    templateUrl: './area-do-cliente.component.html',
    styleUrl: './area-do-cliente.component.css',
    imports: [HistoricoTransacoesComponent, AcessoRapidoAreaInternaComponent, MenuLateralComponent, SecaoSaldoComponent, CabecalhoAreaInternaComponent]
})
export class AreaDoClienteComponent {

}
