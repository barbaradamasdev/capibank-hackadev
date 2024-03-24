import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../../../Services/api.service';

@Component({
  selector: 'app-transferencia',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './transferencia.component.html',
  styleUrl: './transferencia.component.css'
})
export class TransferenciaComponent {
  idConta : number = this.apiService.idTitularLogado; //FIXME remover ao criar login
  errorMessage!: string;
  valor?: number;
  cpfTitular? : any;

  transferencia = new FormGroup({
    valor: new FormControl('', [Validators.required, Validators.min(0)]),
  });

   constructor(
    private apiService: ApiService,
    private router: Router,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Capibank - Nova Transferência');
  }

  armazenarValor() {
    const valorInput = this.transferencia.get('valor')?.value;
    const valorTransferencia = parseFloat(valorInput!);

    if (valorTransferencia === null || valorTransferencia <= 0) {
      this.errorMessage = 'O valor não pode ser menor ou igual a zero';
      return;
    }

    this.apiService.GetTitularPorId(this.idConta).subscribe(
      titular => {
        this.cpfTitular = titular.cpf;

        if (this.cpfTitular !== null) {
          this.apiService.GetNomeESaldo(this.cpfTitular).subscribe(
            titular => {
              if (valorTransferencia > titular.saldo) {
                this.errorMessage = "Saldo insuficiente";
              } else {
                this.errorMessage = "";
                localStorage.setItem('valorTransferencia', valorTransferencia.toString());
                this.router.navigateByUrl(`/cliente/nova/transferencia/destinatario`);
              }
            }
          );
        }
      },
      error => {
        console.error("Erro ao obter titular:", error);
        this.errorMessage = "Erro ao obter titular";
      }
    );
  }
}
