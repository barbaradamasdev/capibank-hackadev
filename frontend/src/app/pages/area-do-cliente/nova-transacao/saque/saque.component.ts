import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../../../Services/api.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-saque',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './saque.component.html',
  styleUrl: './saque.component.css'
})
export class SaqueComponent{
  saque = new FormGroup({
    valor: new FormControl('', [Validators.required, Validators.min(0)]),
  });
  errorMessage: any;

  get valor() {
    return this.saque.get('valor');
  }

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  // id de teste
  idConta : number = 1;

  sacarValor() {
    const valorSaque = this.valor?.value;

    if (valorSaque === null || valorSaque === undefined) {
      this.errorMessage = 'O valor não pode ser menor ou igual a zero';
    }
    const valorNumerico = parseFloat(valorSaque!);
      this.errorMessage = '';

      this.apiService.PostSaque(this.idConta, valorNumerico).subscribe(
        (response: any) => {
          if (response === 'Saque efetuado com sucesso') {
            console.log('Saque realizado com sucesso!');
            // Extrai o ID da transação e outros dados relevantes da resposta da API
            // const idTransacao = response.id;
            // const dataTransacao = new Date().toISOString();

            // Navega para o componente de confirmação e passa os dados usando o objeto 'state'
            this.router.navigateByUrl('/cliente/nova/saque/ok')
            // this.router.navigate(['/cliente/nova/saque/ok'], {
            //   state: {
            //     idTransacao: idTransacao,
            //     valor: valorNumerico,
            //     dataTransacao: dataTransacao
            //   }
            // });
          } else {
            console.error('Resposta do servidor inesperada:', response);
          }
        },
        (HttpResponse) => {
          if (HttpResponse.status === 404) {
            this.errorMessage = 'A conta não foi encontrada';
          } else if (HttpResponse.status === 400) {
            this.errorMessage = 'O valor é inválido';
          } else if (HttpResponse.status === 200) {
            this.errorMessage = 'Saque realizado';
            console.log('Saque realizado com sucesso!');
          } else {
            this.errorMessage = 'Ocorreu um erro ao processar a solicitação. Tente novamente mais tarde';
          }
        }
      );
  }
}
