
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Titular } from '../../../../Models/Titular';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario-entrar',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './formulario-entrar.component.html',
  styleUrls: ['../../../../../form.css','./formulario-entrar.component.css']
})
export class FormularioEntrarComponent {

  constructor(private rota: Router){}

  formLogin = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    senha: new FormControl('',[Validators.required])
  });

  user: Titular = {
    email: 'sharp@gmail.com',
    senha:'admin123',
    token:'123123',
    nome: 'Capitonio Nascimento'
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

  autenticar():void{
    if(this.formLogin.value.email == this.user.email && this.formLogin.value.senha == this.user.senha){
      localStorage.setItem('email', JSON.stringify(this.formLogin.value.email));
      localStorage.setItem('senha', JSON.stringify(this.formLogin.value.senha));
      localStorage.setItem('nome', JSON.stringify(this.user.nome));
      this.rota.navigateByUrl('/login/token')
    }else{
      this.exibirModalErro("Senha ou usuário inválidos! Por favor, tente novamente.");
    }
    this.formLogin.reset();
  }
}
