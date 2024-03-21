import { Component, Input } from '@angular/core';
import { CabecalhoAreaInternaComponent } from "../../../componentes/cabecalho-area-interna/cabecalho-area-interna.component";
import { SecaoSaldoComponent } from "../../../componentes/secao-saldo/secao-saldo.component";
import { HistoricoTransacoesComponent } from "../../../componentes/historico-transacoes/historico-transacoes.component";
import { MenuInferiorAreaInternaComponent } from "../../../componentes/menu-inferior-area-interna/menu-inferior-area-interna.component";
import { MenuLateralComponent } from "../../../componentes/menu-lateral/menu-lateral.component";
import { BarraDeBuscaComponent } from "../../../componentes/barra-de-busca/barra-de-busca.component";
import { Titular } from '../../../Models/Titular';
import { MenuService } from '../../../servicos/menu.service';
import { CommonModule } from '@angular/common';
import { Subscription, filter } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-historico-de-transacao',
    standalone: true,
    templateUrl: './historico-de-transacao.component.html',
    styleUrl: './historico-de-transacao.component.css',
    imports: [CabecalhoAreaInternaComponent, SecaoSaldoComponent, HistoricoTransacoesComponent, MenuInferiorAreaInternaComponent, MenuLateralComponent, CommonModule, BarraDeBuscaComponent]
})
export class HistoricoDeTransacaoComponent {
  logoTipo: string = 'azul';
  isMenuOpen: boolean = false;
  private routerSubscription: Subscription;

  constructor(private menuService: MenuService, private router: Router) {
    this.menuService.isMenuOpen$.subscribe((isOpen) => {
      this.isMenuOpen = isOpen;
    });

    this.routerSubscription = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.isMenuOpen = false;
    });
  }

  onLinkClicked() {
    this.isMenuOpen = false;
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
