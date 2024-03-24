import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../../../Services/api.service';

@Component({
  selector: 'app-formulario-criar-conta-pg-quatro',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, RouterLink],
  templateUrl: './formulario-criar-conta-pg-quatro.component.html',
  styleUrls: ['../../../../../form.css', './formulario-criar-conta-pg-quatro.component.css']

})
export class FormularioCriarContaPgQuatroComponent {
  senhaForm: FormGroup;
  senha?: string;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
  ) {
    this.senhaForm = this.formBuilder.group({
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit(event: Event): void {
    event.preventDefault();

    if (this.senhaForm.valid) {
      if (this.passwordsMatch() &&
          this.hasLength() &&
          this.hasNumber() &&
          this.hasUpperCase() &&
          this.hasLowercase()) {

          this.senha = this.senhaForm.get('newPassword')?.value;
        this.enviarDados();
      } else {
        alert('Senha inválida, confira novamente os requisitos')
      }
    } else {
      alert('Preencha todos os campos')
    }
  }

  hasLength(): boolean {
    return this.senhaForm.get('newPassword')?.value.length >= 8;
  }

  hasNumber(): boolean {
    const value: string = this.senhaForm.get('newPassword')?.value;
    return /\d/.test(value);
  }

  hasLowercase(): boolean {
    const value: string = this.senhaForm.get('newPassword')?.value;
    return /[a-z]/.test(value);
  }

  hasUpperCase(): boolean {
    const value: string = this.senhaForm.get('newPassword')?.value;
    return /[A-Z]/.test(value);
  }

  passwordsMatch(): boolean {
    const newPassword = this.senhaForm.get('newPassword')?.value;
    const confirmPassword = this.senhaForm.get('confirmPassword')?.value;
    return newPassword === confirmPassword;
  }

  enviarDados(): void {
    const dadosPassoUm = localStorage.getItem('dadosPassoUm');
    const dadosPassoDois = localStorage.getItem('dadosPassoDois');

    if (dadosPassoUm && dadosPassoDois) {
      const dadosPassoUmJSON = JSON.parse(dadosPassoUm);
      const dadosPassoDoisJSON = JSON.parse(dadosPassoDois);

      const dados = {
        numeroConta: 5666, //FIXME atualizar numero conta
        titular: {
          nome: dadosPassoUmJSON.nome,
          email: dadosPassoUmJSON.email,
          cpf: dadosPassoUmJSON.cpf,
          senha: this.senha,
          endereco: {
            cep: dadosPassoDoisJSON.cep,
            logradouro: dadosPassoDoisJSON.rua,
            numero: dadosPassoDoisJSON.numero,
            complemento: dadosPassoDoisJSON.complemento,
            bairro: dadosPassoDoisJSON.bairro,
            cidade: dadosPassoDoisJSON.cidade,
            uf: dadosPassoDoisJSON.uf
          }
        }
      };

      this.apiService.PostContaCorrente(dados).subscribe(response => {
        console.log('Resposta do servidor:', response);
        this.router.navigateByUrl('/cadastrar/passo-5');

      }, error => {
        console.error('Erro ao enviar dados:', error);
      });
    } else {
      console.error('Não há dados de usuário no Local Storage.');
    }
  }
}
