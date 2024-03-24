import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-inferior-area-interna',
  standalone: true,
  imports: [ CommonModule , RouterLink],
  templateUrl: './menu-inferior-area-interna.component.html',
  styleUrl: './menu-inferior-area-interna.component.css'
})
export class MenuInferiorAreaInternaComponent {

  destacarIcone: boolean[] = [false, false, false, false];

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.url;

        this.icons.forEach((icon, index) => {
          if (url.endsWith(icon.link)) {
            this.destacarIcone[index] = true;
          }
        });
      }
    });
  }

  icons = [
    { src: 'assets/icones/icone-inicio-cinza.png', alt: 'Inicio', color: '#666', link:'/cliente'},
    { src: 'assets/icones/icone-transacoes-cinza.png', alt: 'Transações', color: '#666', link:'/cliente/historico'},
    { src: 'assets/icones/icone-contato-cinza.png', alt: 'Ajuda', color: '#666', link:'/cliente/chamado'},
    { src: 'assets/icones/icone-config-cinza.png', alt: 'Configurações', color: '#666', link:'/cliente/config' }
  ];

  onMouseEnter(icon: any) {
    icon.src = icon.src.replace('-cinza.png', '-azul.png');
    icon.color = '#23217E';
  }

  onMouseLeave(icon: any) {
    icon.src = icon.src.replace('-azul.png', '-cinza.png');
    icon.color = '#666';
  }
}
