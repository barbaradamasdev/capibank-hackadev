import { Component } from '@angular/core';
import { Subscription, filter } from 'rxjs';
import { MenuService } from '../../../servicos/menu.service';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SaqueComponent } from './saque/saque.component';
import { MenuLateralComponent } from "../../../componentes/menu-lateral/menu-lateral.component";


@Component({
    selector: 'app-nova-transacao',
    standalone: true,
    templateUrl: './nova-transacao.component.html',
    styleUrl: './nova-transacao.component.css',
    imports: [CommonModule, RouterOutlet, SaqueComponent, MenuLateralComponent]
})
export class NovaTransacaoComponent {
  isMenuOpen: boolean = false;
  private routerSubscription: Subscription;

  constructor(private menuService: MenuService, private router: Router) {
    this.menuService.isMenuOpen$.subscribe((isOpen: boolean) => {
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
