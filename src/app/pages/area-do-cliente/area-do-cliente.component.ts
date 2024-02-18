import { Component } from '@angular/core';
import { HistoricoTransacoesComponent } from "../../componentes/historico-transacoes/historico-transacoes.component";
import { AcessoRapidoAreaInternaComponent } from "../../componentes/acesso-rapido-area-interna/acesso-rapido-area-interna.component";
import { SecaoSaldoComponent } from "../../componentes/secao-saldo/secao-saldo.component";
import { CabecalhoAreaInternaComponent } from "../../componentes/cabecalho-area-interna/cabecalho-area-interna.component";
import { MenuInferiorAreaInternaComponent } from "../../componentes/menu-inferior-area-interna/menu-inferior-area-interna.component";
import { MenuLateralComponent } from "../../componentes/menu-lateral/menu-lateral.component";
import { BarraDeBuscaComponent } from "../../componentes/barra-de-busca/barra-de-busca.component";
import { MenuService } from '../../servicos/menu.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-area-do-cliente',
    standalone: true,
    templateUrl: './area-do-cliente.component.html',
    styleUrl: './area-do-cliente.component.css',
    imports: [HistoricoTransacoesComponent, AcessoRapidoAreaInternaComponent, SecaoSaldoComponent, CabecalhoAreaInternaComponent, MenuInferiorAreaInternaComponent, MenuLateralComponent, CommonModule, BarraDeBuscaComponent]
})
export class AreaDoClienteComponent {
  isMenuOpen: boolean = false;

  constructor(private menuService: MenuService) {
    this.menuService.isMenuOpen$.subscribe((isOpen) => {
      this.isMenuOpen = isOpen;
    });
  }

}
