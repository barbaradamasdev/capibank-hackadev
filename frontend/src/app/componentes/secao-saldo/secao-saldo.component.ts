import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../Services/api.service';
import { TransacaoService } from '../../Services/transacao-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-secao-saldo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './secao-saldo.component.html',
  styleUrl: './secao-saldo.component.css'
})
export class SecaoSaldoComponent implements OnInit, OnDestroy {
  nome?: string ;
  cpfConta? : string;
  saldoConta? : number;
  saldoVisivel: boolean = true;
  private transacaoSubscription!: Subscription;

  constructor(private apiService: ApiService, private transacaoService: TransacaoService) {}

  ngOnInit() {
    this.pegarDadosTitular();

    this.transacaoSubscription = this.transacaoService.transacaoConcluida$.subscribe(() => {
      this.atualizarSaldo();
    });

    const visibilidadeSaldoArmazenada = localStorage.getItem('visibilidadeSaldo');
    if (visibilidadeSaldoArmazenada !== null) {
      this.saldoVisivel = JSON.parse(visibilidadeSaldoArmazenada);
    }
  }

  ngOnDestroy() {
    this.transacaoSubscription.unsubscribe();
  }

  toggleVisibilidadeSaldo() {
    this.saldoVisivel = !this.saldoVisivel;
    localStorage.setItem('visibilidadeSaldo', JSON.stringify(this.saldoVisivel));
  }

  atualizarSaldo() {
    console.log('Atualizando saldo...');
    this.pegarDadosTitular();
  }

  pegarDadosTitular() {
    this.apiService.GetTitularPorId(this.apiService.idTitularLogado).subscribe(titular => {
      if (titular && titular.nome) {
        this.nome = titular.nome;
        this.cpfConta = titular.cpf!;

        this.apiService.GetNomeESaldo(this.cpfConta).subscribe(t => {
            this.saldoConta = t.saldo;
      });
      }
    });
  }
}
