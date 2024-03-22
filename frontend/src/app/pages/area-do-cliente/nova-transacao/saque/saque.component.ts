import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../../../Services/api.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-saque',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './saque.component.html',
  styleUrl: './saque.component.css'
})
export class SaqueComponent{
  idConta : number = this.apiService.idTeste; //FIXME remover ao criar login
  errorMessage!: string;

  saque = new FormGroup({
    valor: new FormControl('', [Validators.required, Validators.min(0)]),
  });

  constructor(
    private apiService: ApiService,
    private router: Router,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Capibank - Novo Saque');
  }

  sacarValor() {
    const valorInput = this.saque.get('valor')?.value;
    const valorSaque = parseFloat(valorInput!);

    this.apiService.PostSaque(this.idConta, valorSaque).subscribe(
      (response: any) => {
        if (typeof response === 'object') {
          console.log("Transação bem-sucedida. ID da transação:", response);
          this.router.navigateByUrl(`/cliente/nova/saque/ok/${response.id}`);
        } else {
          console.error("Erro ao efetuar o saque:", response);
          this.errorMessage = "Erro ao efetuar o saque";

          //TODO validacao caso saldo negativo
        }
       },
       error => {
        console.error("Erro ao efetuar o saque:", error);
       }
     );
  }
}
