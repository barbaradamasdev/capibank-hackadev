import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

ngOnInit(){
  const dadosPassoUm = sessionStorage.getItem('dadosPassoUm');
    const dadosPassoDois = sessionStorage.getItem('dadosPassoDois');

    if (dadosPassoUm && dadosPassoDois) {
      const dadosPassoUmJSON = JSON.parse(dadosPassoUm);
      const dadosPassoDoisJSON = JSON.parse(dadosPassoDois);
      console.log(dadosPassoDois)
      console.log(dadosPassoDoisJSON)

      const dados = {
        numeroConta: 5666, //FIXME atualiar numero conta
        titular: {
          nome: dadosPassoUmJSON.nome,
          email: dadosPassoUmJSON.email,
          cpf: dadosPassoUmJSON.cpf,
          senha: this.senha,
          endereco: {
            cep: dadosPassoDoisJSON.cep,
            logradouro: dadosPassoDoisJSON.logradouro,
            numero: dadosPassoDoisJSON.numero,
            complemento: dadosPassoDoisJSON.complemento,
            bairro: dadosPassoDoisJSON.bairro,
            cidade: dadosPassoDoisJSON.cidade,
            uf: dadosPassoDoisJSON.uf
          }
        }
      };

      console.log(dados);
  }
}

  onSubmit() {
    if (this.senhaForm.valid) {
      const newPassword = this.senhaForm.get('newPassword')?.value;
      const confirmPassword = this.senhaForm.get('confirmPassword')?.value;

      if (newPassword === confirmPassword) {
        this.senha = newPassword;
        this.enviarDados();
      }

      // Enviar os dados para a API
      // this.apiService.enviarSenhaParaAPI(newPassword, confirmPassword).subscribe(
      //   response => {
      //     // Lidar com a resposta da API, redirecionar ou exibir mensagens de sucesso
      //   },
      //   error => {
      //     // Lidar com erros da API, exibir mensagens de erro
      //   }
      // );
    }
  }

  enviarDados(): void {
    const dadosPassoUm = sessionStorage.getItem('dadosPassoUm');
    const dadosPassoDois = sessionStorage.getItem('dadosPassoDois');

    if (dadosPassoUm && dadosPassoDois) {
      const dadosPassoUmJSON = JSON.parse(dadosPassoUm);
      const dadosPassoDoisJSON = JSON.parse(dadosPassoDois);
      console.log(dadosPassoDoisJSON)

      const dados = {
        numeroConta: 5666, //FIXME atualiar numero conta
        titular: {
          nome: dadosPassoUmJSON.nome,
          email: dadosPassoUmJSON.email,
          cpf: dadosPassoUmJSON.cpf,
          senha: this.senha,
          endereco: {
            cep: dadosPassoDoisJSON.cep,
            logradouro: dadosPassoDoisJSON.logradouro,
            numero: dadosPassoDoisJSON.numero,
            complemento: dadosPassoDoisJSON.complemento,
            bairro: dadosPassoDoisJSON.bairro,
            cidade: dadosPassoDoisJSON.cidade,
            uf: dadosPassoDoisJSON.uf
          }
        }
      };

      console.log(dados);
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

  // @Input() newPassword: string = '';
  // @Input() confirmPassword: string = '';
  // passwordRequirements = {
  //   length: false,
  //   number: false,
  //   lowercase: false,
  //   uppercase: false
  // };
  // hasStartedTyping = false;

  // onPasswordInput() {
  //   this.hasStartedTyping = true;
  //   this.checkPasswordRequirements();
  // }

  // checkPasswordRequirements() {
  //   const numberPattern = /\d/;
  //   const lowercasePattern = /[a-z]/;
  //   const uppercasePattern = /[A-Z]/;

  //   this.passwordRequirements.length = this.newPassword.length >= 8;
  //   this.passwordRequirements.number = numberPattern.test(this.newPassword);
  //   this.passwordRequirements.lowercase = lowercasePattern.test(this.newPassword);
  //   this.passwordRequirements.uppercase = uppercasePattern.test(this.newPassword);
  // }
  // passwordIsValid() {
  //   return this.passwordRequirements.length &&
  //          this.passwordRequirements.number &&
  //          this.passwordRequirements.lowercase &&
  //          this.passwordRequirements.uppercase;
  // }

  // passwordsMatch() {
  //   return this.newPassword === this.confirmPassword;
  // }
}
