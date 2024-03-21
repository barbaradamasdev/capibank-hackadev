import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnderecoService } from '../../../../servicos/endereco.service';
import { Endereco } from '../../../../Models/Endereco';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-criar-conta-pg-dois',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-criar-conta-pg-dois.component.html',
  styleUrls: ['../../../../../form.css', './formulario-criar-conta-pg-dois.component.css']
})
export class FormularioCriarContaPgDoisComponent {
  entradaCep: FormGroup;

  constructor(private servicoEndereco: EnderecoService) {
    this.entradaCep = new FormGroup({
      cep: new FormControl('', [Validators.required, Validators.pattern(/^\d{8}$/)]),
      rua: new FormControl({ value: '', disabled: true }),
      numero: new FormControl(''),
      cidade: new FormControl({ value: '', disabled: true }),
      complemento: new FormControl(''),
    });
  }

  buscarEndereco(): void {
    const cep = this.entradaCep.get('cep')?.value.replace(/\D/g, '');
    if (cep.length !== 8) {
      alert("CEP deve ter 8 dígitos");
      return;
    }

  //   this.servicoEndereco.buscaCep(cep).subscribe(
  //     (dados: Endereco) => {
  //       if (dados && !dados.erro) {
  //         this.entradaCep.patchValue({
  //           rua: dados.logradouro || '',
  //           cidade: dados.localidade,
  //         });

  //         if (dados.logradouro) {
  //           this.entradaCep.get('rua')?.disable();
  //         } else {

  //           this.entradaCep.get('rua')?.enable();
  //         }
  //       } else {

  //         this.entradaCep.enable();
  //         this.entradaCep.patchValue({ cidade: '', rua: '' });
  //       }
  //     },
  //     (error: any) => {
  //       alert("Erro ao buscar o CEP.");
  //       console.error(error);
  //       this.entradaCep.enable();
  //     }
  //   );
  }
}
