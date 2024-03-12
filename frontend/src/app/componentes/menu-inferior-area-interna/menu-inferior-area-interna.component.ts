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

  // Verifica rota para destacar menu inferior
  destacarIcone: boolean[] = [false, false, false, false];

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.url;

        // Verifica se o link de cada ícone corresponde à página atual
        this.icons.forEach((icon, index) => {
          if (url.endsWith(icon.link)) {
            this.destacarIcone[index] = true;
          }
        });
      }
    });
  }

  // Definindo as imagens iniciais e cores das legendas
  icons = [
    { src: 'assets/icones/icone-inicio-cinza.png', alt: 'Inicio', color: '#666', link:'/cliente'},
    { src: 'assets/icones/icone-transacoes-cinza.png', alt: 'Transações', color: '#666', link:'/historico'},
    { src: 'assets/icones/icone-cartoes-cinza.png', alt: 'Meus cartões', color: '#666', link:'/cartoes'},
    { src: 'assets/icones/icone-config-cinza.png', alt: 'Configurações', color: '#666', link:'/config' }
  ];

  // Método para alterar a imagem e a cor da legenda quando o mouse entra
  onMouseEnter(icon: any) {
    icon.src = icon.src.replace('-cinza.png', '-azul.png');
    icon.color = '#23217E';
  }

  // Método para reverter a imagem e a cor da legenda quando o mouse sai
  onMouseLeave(icon: any) {
    icon.src = icon.src.replace('-azul.png', '-cinza.png');
    icon.color = '#666';
  }
}
