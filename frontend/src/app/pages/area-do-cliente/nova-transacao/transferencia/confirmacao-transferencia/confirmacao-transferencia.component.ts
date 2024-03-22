import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../../../Services/api.service';

@Component({
  selector: 'app-confirmacao-transferencia',
  standalone: true,
  imports: [],
  templateUrl: './confirmacao-transferencia.component.html',
  styleUrl: './confirmacao-transferencia.component.css'
})
export class ConfirmacaoTransferenciaComponent {
  @ViewChild('componentToPrint', {static: false}) componentToPrint!: ElementRef;
  idTransacao?: number;
  titularDestino? : any;
  valor: any;
  dataTransacao: any;
  cpfDestino: any;
  nome: any;
  numeroConta: any;
  tipoConta: string = 'Conta Corrente';
  situacao?: string;
  direcaoTransacao?: string;

  private readonly activatedRoute: ActivatedRoute;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute = activatedRoute;
  }

  // TODO get transacao por id
  ngOnInit(): void {
    this.activatedRoute.url.subscribe((urlSegments) => {
      const ultimoSegmento = urlSegments[urlSegments.length - 1];
      this.idTransacao = parseInt(ultimoSegmento.path);

      this.apiService.GetTransacoes().subscribe(transacoes => {
        const transacaoEncontrada = transacoes.find(
          transacao => transacao.id === this.idTransacao
          );
          if (transacaoEncontrada) {
          console.log(transacaoEncontrada)

          this.idTransacao = transacaoEncontrada.id;
          this.valor = transacaoEncontrada.valor;
          this.situacao = transacaoEncontrada.situacao === 1 ? "Concluída" : "Cancelada";
          this.direcaoTransacao = transacaoEncontrada.tipoTransacao === 3 ? "Enviada" : "Recebida";
          this.dataTransacao = this.formatarData(transacaoEncontrada.dataTransacao);

          const idContaDestino = transacaoEncontrada.contaDestinoOrigemId;

          this.apiService.GetTitulares().subscribe(
            titulares => {
              this.titularDestino = titulares.find(
                t => t.id === idContaDestino
              );

              if (this.titularDestino) {
                const idTitular = this.titularDestino.id;

                this.apiService.GetContasCorrentes().subscribe(
                  contas => {
                    const contaEncontrada = contas.find(
                      conta => conta.titular.id === idTitular
                    );

                    if (contaEncontrada) {
                      this.cpfDestino = contaEncontrada.titular.cpf
                      this.numeroConta = contaEncontrada.numeroConta
                      // this.tipoConta = "Conta Corrente"
                      this.nome = contaEncontrada.titular.nome
                      console.log(this.cpfDestino)
                      console.log('entrou')
                    } else {
                      console.log('entrou')
                      console.log('Conta não encontrada para o titular com id:', idTitular);
                    }
                  },
                  error => {
                    console.error('Erro ao buscar contas correntes:', error);
                  }
                );
              }
            },
            error => {
              console.error('Erro ao obter titulares:', error);
            }
          );


        } else {
          console.log("Transacao não encontrada com o ID", this.idTransacao);
        }
      });
    });
  }

  formatarData(data: string): string {
    const dateObj = new Date(data);
    const dia = dateObj.getDate();
    const mes = dateObj.getMonth() + 1;
    const ano = dateObj.getFullYear();
    const hora = dateObj.getHours();
    const minutos = dateObj.getMinutes().toString().padStart(2, '0');

    const dataFormatada = `${dia}/${mes}/${ano} ${hora}:${minutos}`;
    return dataFormatada;
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
