import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
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
  ruaDaApiCep? : string;
  bairroDaApiCep? : string;
  cidadeDaApiCep? : string;

  constructor(
    private formBuilder: FormBuilder,
    private servicoEndereco: EnderecoService,
    private router: Router,
  ) {
    this.entradaCep = this.formBuilder.group({
      cep: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      rua: [{ value: '', disabled: true }],
      numero: [''],
      bairro: [{ value: '', disabled: true }],
      cidade: [{ value: '', disabled: true }],
      complemento: ['']
    });
  }

  buscarEndereco(): void {
    const cep = this.entradaCep.get('cep')?.value.replace(/\D/g, '');
    if (cep.length !== 8) {
      alert('CEP deve ter 8 dígitos');
      return;
    }

    this.servicoEndereco.buscaCep(cep).subscribe(
      (dados: Endereco) => {
        if (dados) {
          console.log(dados)
          this.entradaCep.patchValue({
            rua: dados.logradouro,
            bairro: dados.bairro,
            cidade: dados.localidade,
          });

          this.ruaDaApiCep = dados.logradouro;
          this.bairroDaApiCep = dados.bairro;
          this.cidadeDaApiCep = dados.cidade;

          if (dados.logradouro) {
            this.entradaCep.get('rua')?.disable();
          } else {

            this.entradaCep.get('rua')?.enable();
          }
        } else {
          this.entradaCep.enable();
          this.entradaCep.patchValue({ cidade: '', rua: '' });
        }
      },
      (error: any) => {
        alert("Erro ao buscar o CEP.");
        console.error(error);
        this.entradaCep.enable();
      }
    );
  }

  onSubmit(): void {
    if (this.entradaCep.valid) {
      const cep = this.entradaCep.get('cep')?.value.replace(/\D/g, '');
      const numero = this.entradaCep.get('numero')?.value;
      const complemento = this.entradaCep.get('complemento')?.value;

      // const rua = this.entradaCep.get('rua')?.value;
      // const bairro = this.entradaCep.get('bairro')?.value;
      // const cidade = this.entradaCep.get('cidade')?.value;

      const rua = this.ruaDaApiCep;
      const bairro = this.bairroDaApiCep;
      const cidade = this.cidadeDaApiCep;

      const dadosPassoDois = {
        cep: cep,
        rua: rua,
        bairro: bairro,
        cidade: cidade,
        numero: numero,
        complemento: complemento
      };

      localStorage.setItem('dadosPassoDois', JSON.stringify(dadosPassoDois));
      this.router.navigateByUrl('/cadastrar/passo-3');
    } else {
      alert("Erro no envio")
    }
  }
}
