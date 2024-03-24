import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { EnderecoService } from '../../../../servicos/endereco.service';
import { Endereco } from '../../../../Models/Endereco';
import { CommonModule } from '@angular/common';
import { debounce } from 'rxjs/operators';
import { timer } from 'rxjs';

@Component({
  selector: 'app-formulario-criar-conta-pg-dois',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-criar-conta-pg-dois.component.html',
  styleUrls: ['../../../../../form.css', './formulario-criar-conta-pg-dois.component.css']
})
export class FormularioCriarContaPgDoisComponent {
  entradaCep: FormGroup;
  errorMessage!: string;
  uf? : string;

  constructor(
    private formBuilder: FormBuilder,
    private servicoEndereco: EnderecoService,
    private router: Router,
  ) {
    this.entradaCep = this.formBuilder.group({
      cep: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      rua: [{ value: '', disabled: true }, [Validators.required]],
      numero: ['', [Validators.required]],
      bairro: [{ value: '', disabled: true }, [Validators.required]],
      cidade: [{ value: '', disabled: true }, [Validators.required]],
      complemento: ['']
    });
  }

  buscarEndereco(): void {
    const cep = this.entradaCep.get('cep')?.value.replace(/\D/g, '');

    if (cep.length !== 8) {
      this.errorMessage = 'CEP inválido';
      return;
    } else {
      this.errorMessage = '';
    }

    this.servicoEndereco.buscaCep(cep)
      .pipe(debounce(() => timer(500)))
      .subscribe(
      (dados: Endereco) => {
        if (dados) {
          this.entradaCep.patchValue({
            rua: dados.logradouro,
            bairro: dados.bairro,
            cidade: dados.localidade,
          });

          this.uf = dados.uf;

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

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.entradaCep.valid) {
      const cep = this.entradaCep.get('cep')?.value.replace(/\D/g, '');
      const numero = this.entradaCep.get('numero')?.value;
      const complemento = this.entradaCep.get('complemento')?.value;
      const rua = this.entradaCep.get('rua')?.value;
      const bairro = this.entradaCep.get('bairro')?.value;
      const cidade = this.entradaCep.get('cidade')?.value;

      const dadosPassoDois = {
        cep: cep,
        rua: rua,
        bairro: bairro,
        cidade: cidade,
        numero: numero,
        complemento: complemento,
        uf: this.uf,
      };

      localStorage.setItem('dadosPassoDois', JSON.stringify(dadosPassoDois));
      this.router.navigateByUrl('/cadastrar/passo-3');
    }
  }
}
