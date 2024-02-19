
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Cliente } from '../../../Models/Cliente';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario-entrar',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './formulario-entrar.component.html',
  styleUrl: './formulario-entrar.component.css'
})
export class FormularioEntrarComponent {

  constructor(private rota: Router){}

  formLogin = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    senha: new FormControl('',[Validators.required])
  });
  user: Cliente = {
    email: 'sharp@gmail.com',
    senha:'admin123',
    nome: 'Antonio Trooper'
  }

  exibirModalErro(mensagem: string): void {
    // Criar um modal Bootstrap para exibir a mensagem de erro
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

    // Adicionar classe 'show' para exibir o modal
    modalElement.classList.add('show');
    modalElement.style.display = 'block';

    // Adicionar evento de clique para fechar o modal
    const closeModalButton = modalElement.querySelector('.close, .btn-secondary');

    // Verificar se o botão de fechar foi encontrado antes de adicionar o evento
    if (closeModalButton) {
      closeModalButton.addEventListener('click', () => {
        modalElement.remove(); // Remover o elemento do modal do DOM após fechar
      });
    }

    // Fechar automaticamente após 2 segundos
    setTimeout(() => {
      modalElement.remove();
    }, 2000);
  }

  autenticar():void{
    if(this.formLogin.value.email == this.user.email && this.formLogin.value.senha == this.user.senha){
      localStorage.setItem('email', this.formLogin.value.email)
      localStorage.setItem('senha', this.formLogin.value.senha)
      localStorage.setItem('nome', this.user.nome)
      this.rota.navigateByUrl('/cliente')
    }else{
      // Exibir modal de erro com a mensagem personalizada
      this.exibirModalErro("Login falhou, senha ou usuário inválidos!!!");
    }
    this.formLogin.reset();
  }
}
