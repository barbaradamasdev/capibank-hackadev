import { Component, HostListener, Input } from '@angular/core';
import { HistoricoTransacoesComponent } from "../../componentes/historico-transacoes/historico-transacoes.component";
import { AcessoRapidoAreaInternaComponent } from "../../componentes/acesso-rapido-area-interna/acesso-rapido-area-interna.component";
import { SecaoSaldoComponent } from "../../componentes/secao-saldo/secao-saldo.component";
import { CabecalhoAreaInternaComponent } from "../../componentes/cabecalho-area-interna/cabecalho-area-interna.component";
import { MenuInferiorAreaInternaComponent } from "../../componentes/menu-inferior-area-interna/menu-inferior-area-interna.component";
import { MenuLateralComponent } from "../../componentes/menu-lateral/menu-lateral.component";
import { BarraDeBuscaComponent } from "../../componentes/barra-de-busca/barra-de-busca.component";
import { MenuService } from '../../servicos/menu.service';
import { CommonModule } from '@angular/common';
import { Subscription, filter } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet, UrlSegment } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-area-do-cliente',
    standalone: true,
    templateUrl: './area-do-cliente.component.html',
    styleUrl: './area-do-cliente.component.css',
    imports: [RouterOutlet, HistoricoTransacoesComponent, AcessoRapidoAreaInternaComponent, SecaoSaldoComponent, CabecalhoAreaInternaComponent, MenuInferiorAreaInternaComponent, MenuLateralComponent, CommonModule, BarraDeBuscaComponent]
})
export class AreaDoClienteComponent {



  logoTipo: string = 'azul';
  isMenuOpen: boolean = false;
  isNovaTransacaoRoute: boolean = false;
  isSmallScreen: boolean = false;
  private routerSubscription: Subscription;

  constructor(private titleService: Title, private menuService: MenuService, private router: Router, private route: ActivatedRoute) {
    this.menuService.isMenuOpen$.subscribe((isOpen) => {
      this.isMenuOpen = isOpen;
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const urlSegments: UrlSegment[] = this.router.parseUrl(event.url).root.children['primary'].segments;
        this.isNovaTransacaoRoute = this.isNovaTransacaoRouteCheck(urlSegments);
      }
    });

    this.checkScreenWidth();

    this.routerSubscription = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.isMenuOpen = false;
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle('Capibank - Área do cliente');
  }

  @HostListener('window:resize')
  checkScreenWidth(): void {
    this.isSmallScreen = window.innerWidth > 745;
  }

  isNovaTransacaoRouteCheck(urlSegments: UrlSegment[]): boolean {
    return urlSegments.some(segment => segment.path.includes('nova'));
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

