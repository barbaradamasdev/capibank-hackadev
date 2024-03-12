import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secao-saldo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './secao-saldo.component.html',
  styleUrl: './secao-saldo.component.css'
})
export class SecaoSaldoComponent implements OnInit {
  nome = localStorage.getItem('nome')

  saldoVisivel: boolean = true;

  ngOnInit() {
    const visibilidadeSaldoArmazenada = localStorage.getItem('visibilidadeSaldo');
    if (visibilidadeSaldoArmazenada !== null) {
      this.saldoVisivel = JSON.parse(visibilidadeSaldoArmazenada);
    }
  }

  toggleVisibilidadeSaldo() {
    this.saldoVisivel = !this.saldoVisivel;
    localStorage.setItem('visibilidadeSaldo', JSON.stringify(this.saldoVisivel));
  }
}
