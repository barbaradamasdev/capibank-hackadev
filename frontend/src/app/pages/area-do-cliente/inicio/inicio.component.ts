import { Component } from '@angular/core';
import { AcessoRapidoAreaInternaComponent } from "../../../componentes/acesso-rapido-area-interna/acesso-rapido-area-interna.component";
import { BarraDeBuscaComponent } from "../../../componentes/barra-de-busca/barra-de-busca.component";
import { HistoricoTransacoesComponent } from "../../../componentes/historico-transacoes/historico-transacoes.component";
import { MenuLateralComponent } from "../../../componentes/menu-lateral/menu-lateral.component";
import { MenuService } from '../../../servicos/menu.service';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-inicio',
    standalone: true,
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.css',
    imports: [CommonModule, AcessoRapidoAreaInternaComponent, BarraDeBuscaComponent, HistoricoTransacoesComponent, MenuLateralComponent]
})
export class InicioComponent {
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
