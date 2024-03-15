import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { MenuService } from '../../servicos/menu.service';
import { Subscription, filter } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cabecalho-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './cabecalho-home.component.html',
  styleUrl: './cabecalho-home.component.css'
})
export class CabecalhoHomeComponent {
  elementRef: any;

  logout():void{
    localStorage.clear();
  }

  toggleMenu() {
    this.menuService.toggleMenu();
  }

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
