import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-secao-saldo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './secao-saldo.component.html',
  styleUrl: './secao-saldo.component.css'
})
export class SecaoSaldoComponent {
  nome = localStorage.getItem('nome')

  saldoVisivel: boolean = true;

  toggleVisibilidadeSaldo() {
    this.saldoVisivel = !this.saldoVisivel;
  }
}
