import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../../../../../Services/api.service';

@Component({
  selector: 'app-confirmacao-deposito',
  standalone: true,
  imports: [],
  templateUrl: './confirmacao-deposito.component.html',
  styleUrl: './confirmacao-deposito.component.css'
})
export class ConfirmacaoDepositoComponent {
  @ViewChild('componentToPrint', {static: false}) componentToPrint!: ElementRef;
  idTransacao: any;
  valor: any;
  dataTransacao: any;
  situacao: any;

  private readonly activatedRoute: ActivatedRoute;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute = activatedRoute;
  }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe((urlSegments) => {
      const ultimoSegmento = urlSegments[urlSegments.length - 1];
      this.idTransacao = parseInt(ultimoSegmento.path);

      this.apiService.GetTransacoes().subscribe(transacoes => {
        const transacaoEncontrada = transacoes.find(
          transacao => transacao.id === this.idTransacao
        );
        if (transacaoEncontrada) {
          this.idTransacao = transacaoEncontrada.id;
          this.valor = transacaoEncontrada.valor;
          this.situacao = transacaoEncontrada.situacao === 1 ? "Concluída" : "Cancelada";
          this.dataTransacao = this.formatarData(transacaoEncontrada.dataTransacao);
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
