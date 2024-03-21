import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../../../Services/api.service';

@Component({
  selector: 'app-deposito',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './deposito.component.html',
  styleUrl: './deposito.component.css'
})
export class DepositoComponent {
  idConta : number = 1;// id de teste
  errorMessage!: string;

  deposito = new FormGroup({
    valor: new FormControl('', [Validators.required, Validators.min(0)]),
  });

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  depositarValor() {
    const valorInput = this.deposito.get('valor')?.value;
    const valorDeposito = parseFloat(valorInput!);

    if (valorDeposito === null || valorDeposito <= 0) {
      this.errorMessage = 'O valor não pode ser menor ou igual a zero';
    }

    this.apiService.PostDeposito(this.idConta, valorDeposito).subscribe(
      data => {
        if (data === "Deposito efetuado com sucesso") {
          console.log("Deposito efetuado com sucesso")
          // this.navegarParaConfirmacaoSaque(data);

          this.router.navigateByUrl('/cliente/nova/deposito/ok');
        } else {
          // this.errorMessage = "Erro";
        }
      }, error => {
        // this.errorMessage = "Erro 2";
        // console.log(error);
        // FIXME so muda a rota considerando o erro da transacao
        this.router.navigateByUrl('/cliente/nova/deposito/ok');
      }
    )
  }
}
