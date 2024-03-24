import { Component } from '@angular/core';
import { CabecalhoAreaInternaComponent } from "../../../componentes/cabecalho-area-interna/cabecalho-area-interna.component";
import { SecaoSaldoComponent } from "../../../componentes/secao-saldo/secao-saldo.component";
import { MenuInferiorAreaInternaComponent } from "../../../componentes/menu-inferior-area-interna/menu-inferior-area-interna.component";
import { MenuLateralComponent } from "../../../componentes/menu-lateral/menu-lateral.component";
import { FormChamadoComponent } from "../../area-do-cliente/chamado/form-chamado/form-chamado.component";
import { Subscription, filter } from 'rxjs';
import { MenuService } from '../../../servicos/menu.service';
import { NavigationEnd, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-config',
  standalone: true,
  imports: [CabecalhoAreaInternaComponent, SecaoSaldoComponent, MenuInferiorAreaInternaComponent, MenuLateralComponent, CommonModule, FormChamadoComponent],
  templateUrl: './configuracao.component.html',
  styleUrl: './configuracao.component.css'
})
export class ConfiguracaoComponent {
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
