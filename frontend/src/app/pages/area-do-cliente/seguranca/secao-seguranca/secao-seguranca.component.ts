import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-secao-seguranca',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './secao-seguranca.component.html',
  styleUrl: './secao-seguranca.component.css'
})
export class SecaoSegurancaComponent {

  aplicarEstiloOverflow: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.url;

        if (url.endsWith('/historico')) {
          this.aplicarEstiloOverflow = true;
        } else {
          this.aplicarEstiloOverflow = false;
        }
      }
    });
  }

}
