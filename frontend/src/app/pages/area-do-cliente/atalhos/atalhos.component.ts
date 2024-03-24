import { Component } from '@angular/core';
import { MenuLateralComponent } from "../../../componentes/menu-lateral/menu-lateral.component";
import { MenuService } from '../../../servicos/menu.service';
import { CommonModule } from '@angular/common';
import { Subscription, filter } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { AcessoRapidoAreaInternaComponent } from "../../../componentes/acesso-rapido-area-interna/acesso-rapido-area-interna.component";

@Component({
    selector: 'app-atalhos',
    standalone: true,
    templateUrl: './atalhos.component.html',
    styleUrl: './atalhos.component.css',
    imports: [AcessoRapidoAreaInternaComponent, MenuLateralComponent, CommonModule]
})
export class AtalhosComponent {
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
