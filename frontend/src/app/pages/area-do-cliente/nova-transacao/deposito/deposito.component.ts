import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../../../Services/api.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-deposito',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './deposito.component.html',
  styleUrl: './deposito.component.css'
})
export class DepositoComponent {
  idConta : number = this.apiService.idTitularLogado; //FIXME remover ao criar login
  errorMessage!: string;

  deposito = new FormGroup({
    valor: new FormControl('', [Validators.required, Validators.min(0)]),
  });

  constructor(
    private apiService: ApiService,
    private router: Router,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Capibank - Novo Depósito');
  }

  depositarValor() {
    const valorInput = this.deposito.get('valor')?.value;
    const valorDeposito = parseFloat(valorInput!);

    this.apiService.PostDeposito(this.idConta, valorDeposito).subscribe(
      (response: any) => {
        if (typeof response === 'object') {
          console.log("Transação bem-sucedida. ID da transação:", response);
          this.router.navigateByUrl(`/cliente/nova/deposito/ok/${response.id}`);

        } else {
          console.error("Erro ao efetuar o depósito:", response);
          this.errorMessage = "Erro ao efetuar o depósito";
        }
       },
       error => {
        console.error("Erro ao efetuar o depósito:", error);
       }
     );
  }
}
