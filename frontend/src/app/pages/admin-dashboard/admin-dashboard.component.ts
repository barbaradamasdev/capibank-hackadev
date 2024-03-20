import { Component, HostListener, Input } from '@angular/core';
import { AcessoRapidoAreaInternaComponent } from "../../componentes/acesso-rapido-area-interna/acesso-rapido-area-interna.component";
import { SecaoSaldoComponent } from "../../componentes/secao-saldo/secao-saldo.component";
import { CabecalhoAreaInternaComponent } from "../../componentes/cabecalho-area-interna/cabecalho-area-interna.component";
import { MenuLateralAdminComponent } from "../../pages/admin-dashboard/menu-lateral-admin/menu-lateral-admin.component";
import { BarraDeBuscaComponent } from "../../componentes/barra-de-busca/barra-de-busca.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MenuService } from '../../servicos/menu.service';
import { CommonModule } from '@angular/common';
import { Subscription, filter } from 'rxjs';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../admin-login/header/header.component";

@Component({
    selector: 'app-admin-dashboard',
    standalone: true,
    templateUrl: './admin-dashboard.component.html',
    styleUrl: './admin-dashboard.component.css',
    imports: [RouterOutlet, DashboardComponent, AcessoRapidoAreaInternaComponent, SecaoSaldoComponent, CabecalhoAreaInternaComponent, MenuLateralAdminComponent, CommonModule, BarraDeBuscaComponent, HeaderComponent]
})
export class AdminDashboardComponent {
  logoTipo: string = 'branco';
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
