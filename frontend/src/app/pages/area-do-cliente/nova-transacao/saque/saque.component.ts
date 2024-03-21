import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../../../Services/api.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Transacao } from '../../../../Models/Transacao';


@Component({
  selector: 'app-saque',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './saque.component.html',
  styleUrl: './saque.component.css'
})
export class SaqueComponent{
  idConta : number = 1;// id de teste
  errorMessage!: string;

  saque = new FormGroup({
    valor: new FormControl('', [Validators.required, Validators.min(0)]),
  });

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  sacarValor() {
    const valorInput = this.saque.get('valor')?.value;
    const valorSaque = parseFloat(valorInput!);

    if (valorSaque === null || valorSaque <= 0) {
      this.errorMessage = 'O valor não pode ser menor ou igual a zero';
    }

    this.apiService.PostSaque(this.idConta, valorSaque).subscribe(
      data => {
        if (data === "Saque efetuado com sucesso") {
          console.log("Saque efetuado com sucesso")
          // this.navegarParaConfirmacaoSaque(data);

          this.router.navigateByUrl('/cliente/nova/saque/ok');
        } else {
          // this.errorMessage = "Erro";
        }
      }, error => {
        // this.errorMessage = "Erro 2";
        // console.log(error);
        // FIXME so muda a rota considerando o erro da transacao
        this.router.navigateByUrl('/cliente/nova/saque/ok');
      }
    )
  }
}
