
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../../../Services/api.service';

@Component({
  selector: 'app-formulario-entrar',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './formulario-entrar.component.html',
  styleUrls: ['../../../../../form.css','./formulario-entrar.component.css']
})
export class FormularioEntrarComponent {
  errorMessage!: string;

  formLogin = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    senha: new FormControl('',[Validators.required])
  });

  constructor(private apiService: ApiService, private router: Router){ }

  // user = {
  //   email: 'sharp@gmail.com',
  //   senha:'admin123',
  //   token:'123123',
  //   nome: 'Capitonio Nascimento'
  // }

  autenticar():void{
    if(!this.formLogin.valid){
        this.errorMessage = 'Por favor, preencha todos os campos.';
        return;
    }

    const email = this.formLogin.get('email')?.value  ?? '';
    const senha = this.formLogin.get('senha')?.value  ?? '';

    const dados = {
      email: email,
      cpf: '',
      senha: senha,
    }


    this.apiService.PostLogin(dados).subscribe(
        response => {
          if (typeof response === 'number'){
            this.apiService.idTitularLogado = response;
            this.router.navigateByUrl('/cliente');
            // this.router.navigateByUrl('/login/token');
          } else {
            this.formLogin.reset();
          }
        },
        (error: any) => {
          console.error('Erro ao fazer login: ', error);
          if (error.status === 404) {
              this.errorMessage = 'Usuário não encontrado. Por favor, verifique suas credenciais.';
          } else if (error.status === 400) {
            this.errorMessage = 'Credenciais inválidas. Por favor, verifique seu email e senha.';
          } else {
            this.errorMessage = 'Ocorreu um erro ao fazer login. Por favor, tente novamente mais tarde.';
          }
        }
    )
  }
}
