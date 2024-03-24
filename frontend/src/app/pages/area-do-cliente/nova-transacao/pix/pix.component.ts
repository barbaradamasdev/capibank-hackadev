import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../../../Services/api.service';

@Component({
  selector: 'app-pix',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './pix.component.html',
  styleUrl: './pix.component.css'
})
export class PixComponent {
  idConta : number = this.apiService.idTitularLogado; //FIXME remover ao criar login
  errorMessage!: string;
  valor?: number;
  cpfTitular? : any;

  pix = new FormGroup({
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
    const valorInput = this.pix.get('valor')?.value;
    const valorPix = parseFloat(valorInput!);

    if (valorPix === null || valorPix <= 0) {
      this.errorMessage = 'O valor não pode ser menor ou igual a zero';
      return;
    }

    this.apiService.GetTitularPorId(this.idConta).subscribe(
      titular => {
        this.cpfTitular = titular.cpf;
        console.log(this.cpfTitular);

        if (this.cpfTitular !== null) {
          this.apiService.GetNomeESaldo(this.cpfTitular).subscribe(
            titular => {
              console.log(titular);
              if (valorPix > titular.saldo) {
                this.errorMessage = "Saldo insuficiente";
              } else {
                this.errorMessage = "";
                localStorage.setItem('valorPix', valorPix.toString());
                this.router.navigateByUrl(`/cliente/nova/pix/destinatario`);
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
