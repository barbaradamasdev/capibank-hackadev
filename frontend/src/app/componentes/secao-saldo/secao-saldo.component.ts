import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-secao-saldo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './secao-saldo.component.html',
  styleUrl: './secao-saldo.component.css'
})
export class SecaoSaldoComponent implements OnInit {
  nome?: string ;
  idConta : number = this.apiService.idTitularLogado; //FIXME remover ao criar login
  cpfConta? : string;
  saldoConta? : number;
  saldoVisivel: boolean = true;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.pegarDadosTitular();

    const visibilidadeSaldoArmazenada = localStorage.getItem('visibilidadeSaldo');
    if (visibilidadeSaldoArmazenada !== null) {
      this.saldoVisivel = JSON.parse(visibilidadeSaldoArmazenada);
    }
  }

  toggleVisibilidadeSaldo() {
    this.saldoVisivel = !this.saldoVisivel;
    localStorage.setItem('visibilidadeSaldo', JSON.stringify(this.saldoVisivel));
  }

  pegarDadosTitular() {
    this.apiService.GetTitularPorId(this.idConta).subscribe(titular => {
      if (titular && titular.nome) {
        this.nome = titular.nome;
        this.cpfConta = titular.cpf!;

        this.apiService.GetNomeESaldo(this.cpfConta).subscribe(titular => {
          this.saldoConta = titular.saldo;
        });
      }
    });

    if (this.cpfConta) {
      this.apiService.GetNomeESaldo(this.cpfConta).subscribe(titular => {
        if (titular && titular.nome) {
          this.saldoConta = titular.saldo;
        }
      });
    }

  }

}
