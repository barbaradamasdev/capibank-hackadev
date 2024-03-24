import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Titular } from '../../../../../Models/Titular';
import { Router } from '@angular/router';
import { ApiService } from '../../../../../Services/api.service';


@Component({
  selector: 'app-destinatario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './destinatario.component.html',
  styleUrl: './destinatario.component.css'
})
export class DestinatarioComponentPix {
  idTitular : number = this.apiService.idTitularLogado; //FIXME remover ao criar login
  errorMessage!: string;
  titularEncontrado: Titular | undefined;
  cpfDestino! : string;

  destinatario = new FormGroup({
    chave: new FormControl('', [Validators.required]),
  });

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  procurarTitular() {
    const chave = this.destinatario.get('chave')?.value;
    const chaveNumero = parseInt(chave!);

    if (chave === null) {
      this.errorMessage = 'Precisamos de uma chave para finalizar a transação';
      return;
    }


    this.apiService.GetTitulares().subscribe(
      titulares => {
        if (chave?.includes('@')) {
          const chaveFormatada = chave;
          this.titularEncontrado = titulares.find(
            titular => titular.email === chaveFormatada
          );
        } else {
          const chaveFormatada = parseInt(chave!);
          this.titularEncontrado = titulares.find(
            titular => titular.cpf === chaveFormatada?.toString()
          );
        }

        this.cpfDestino = this.titularEncontrado?.cpf?.toString() ?? '';

        if (this.titularEncontrado) {
          console.log('Titular encontrado:', this.titularEncontrado);
          localStorage.setItem('cpfDestino', this.cpfDestino);
          if (chave?.includes('@')) {
            localStorage.setItem('chavePix', chave.toString());
          } else {
            localStorage.setItem('chavePix', chaveNumero.toString());
          }
          this.router.navigateByUrl(`/cliente/nova/pix/validacao`);
        } else {
          console.error('Titular não encontrado');
          this.errorMessage = 'Chave não encontrada';
        }
      },
      error => {
        console.error('Erro ao obter titulares:', error);
      }
      );
  }
}
