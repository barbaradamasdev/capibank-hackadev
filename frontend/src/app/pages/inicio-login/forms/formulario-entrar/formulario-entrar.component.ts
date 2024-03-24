
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
  // token: string = '123123';

  formLogin = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    senha: new FormControl('',[Validators.required])
  });

  constructor(private apiService: ApiService, private router: Router){ }

  user = {
    email: 'sharp@gmail.com',
    senha:'admin123',
    token:'123123',
    nome: 'Capitonio Nascimento'
  }

  autenticar():void{
    if(!this.formLogin.valid){
        this.errorMessage = 'Por favor, preencha todos os campos.';
        return;
    }

    const email = this.formLogin.get('email')?.value  ?? '';
    const senha = this.formLogin.get('senha')?.value  ?? '';

    localStorage.setItem('senha', this.user.senha);
    localStorage.setItem('email', this.user.email);
    this.router.navigateByUrl('/login/token');






    // this.apiService.GetLoginPorEmail(email).subscribe(
    //     (titular) => {
    //       if (titular.senha === senha){
    //         // localStorage.setItem('token', this.user.token);
    //         localStorage.setItem('senha', this.user.senha);
    //         localStorage.setItem('email', this.user.email);
    //         // this.apiService.idTitularLogado = titular.id;
    //         this.router.navigateByUrl('/login/token');
    //         // this.router.navigateByUrl('/cliente');
    //       } else {
    //         this.exibirModalErro("Senha ou usuário inválidos! Por favor, tente novamente.");
    //         this.formLogin.reset();
    //       }
    //     },
    //     (error: any) => {
    //         console.error('Erro ao fazer login: ', error);
    //         if (error.status === 404) {
    //             this.errorMessage = 'Usuário não encontrado. Por favor, verifique suas credenciais.';
    //           } else if (error.status === 401) {
    //             this.errorMessage = 'Credenciais inválidas. Por favor, verifique seu email e senha.';
    //           } else {
    //             this.errorMessage = 'Ocorreu um erro ao fazer login. Por favor, tente novamente mais tarde.';
    //           }

    //     }
    // )
  }

  exibirModalErro(mensagem: string): void {
    const modalElement = document.createElement('div');
    modalElement.classList.add('modal', 'fade');
    modalElement.innerHTML = `
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Erro no Login</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>${mensagem}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modalElement);

    modalElement.classList.add('show');
    modalElement.style.display = 'block';

    const closeModalButton = modalElement.querySelector('.close, .btn-secondary');

    if (closeModalButton) {
      closeModalButton.addEventListener('click', () => {
        modalElement.remove();
      });
    }

    setTimeout(() => {
      modalElement.remove();
    }, 2000);
  }
}
