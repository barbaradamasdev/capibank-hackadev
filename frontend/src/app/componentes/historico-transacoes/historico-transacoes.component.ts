import { Component, OnInit } from '@angular/core';
import { Transacao } from '../../Models/Transacao';
import { TransacaoTipo } from '../../Models/TransacaoTipo';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { ApiService } from '../../Services/api.service';
import { Titular } from '../../Models/Titular';
import { Observable, filter, map } from 'rxjs';

@Component({
  selector: 'app-historico-transacoes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './historico-transacoes.component.html',
  styleUrl: './historico-transacoes.component.css'
})
export class HistoricoTransacoesComponent implements OnInit {

  aplicarEstiloOverflow: boolean = false;
  transacoes: Transacao[] = [];

  constructor(private router: Router, private apiService: ApiService) {
    this.router.events.subscribe(event => {
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

  ngOnInit(): void {
    this.listarTransacoes();
  }

  listarTransacoes() {
    this.apiService.GetTransacoes().subscribe(transacoes => {
      this.transacoes = transacoes;

      this.transacoes.forEach(
        transacao => {
          if ((transacao.tipoTransacao === 3 || transacao.tipoTransacao === 4) && transacao.situacao === 1) {
            this.buscarNomeTitular(transacao.contaDestinoOrigemId).subscribe(
              titular => {
                transacao.titularContaDestino = titular;
              }
            );
          }
        });
    });
  }

  buscarNomeTitular(idTitular: number): Observable<Titular> {
    return this.apiService.GetTitularPorId(idTitular);
  }

}
