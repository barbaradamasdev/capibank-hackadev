import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../../../../../Services/api.service';
import { Transacao } from '../../../../../Models/Transacao';

@Component({
  selector: 'app-confirmacao-saque',
  standalone: true,
  imports: [],
  templateUrl: './confirmacao-saque.component.html',
  styleUrl: './confirmacao-saque.component.css'
})
export class ConfirmacaoSaqueComponent implements OnInit{
  @ViewChild('componentToPrint', {static: false}) componentToPrint!: ElementRef;
  idTransacao: any;
  valor: any;
  dataTransacao: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {}

  // ngOnInit(): void {
  //   this.route.params.subscribe((params: Params) => {
  //     this.idTransacao = params['idTransacao'];
  //     this.valor = params['valor'];
  //     this.dataTransacao = params['dataTransacao'];
  //   });
  // }


  ngOnInit(): void {
    this.apiService.GetTransacoes().subscribe(
      (transacoes: Transacao[]) => {
        // Ordena as transações com base na data da transação em ordem decrescente
        transacoes.sort((a, b) => new Date(b.dataTransacao).getTime() - new Date(a.dataTransacao).getTime());

        // Pega a primeira transação (ou seja, a última transação cadastrada)
        const ultimaTransacao = transacoes[0];

        if (ultimaTransacao) {
          // Define os valores da última transação nos campos correspondentes
          this.idTransacao = ultimaTransacao.id;
          this.valor = ultimaTransacao.valor;
          this.dataTransacao = ultimaTransacao.dataTransacao;
        } else {
          console.error('Nenhuma transação encontrada');
          // Lidere com o caso em que nenhuma transação é encontrada, talvez redirecionando para uma página de erro
        }
      },
      error => {
        console.error('Erro ao buscar transações:', error);
        // Lidere com o erro, talvez redirecionando para uma página de erro
      }
    );
  }

  imprimir() {
    const conteudo = this.componentToPrint.nativeElement.innerHTML;
    const janelaImpressao = window.open('', '_blank', 'width=600,height=600');
    janelaImpressao?.document.write('<html><head><title>Comprovante de Depósito</title></head><body>');
    janelaImpressao?.document.write(conteudo);
    janelaImpressao?.document.write('</body></html>');
    janelaImpressao?.document.close();
    janelaImpressao?.print();
  }
}
