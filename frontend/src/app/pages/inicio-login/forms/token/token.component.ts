import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Titular } from '../../../../Models/Titular';
import { AdvanceOnInputDirective } from '../../../../Diretivas/advance-on-input-directive';

@Component({
  selector: 'app-token',
  standalone: true,
  imports: [AdvanceOnInputDirective, ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './token.component.html',
  styleUrls: ['../../../../../form.css','./token.component.css']

})
export class TokenComponent {

  constructor(private rota: Router){}

  tokenForm = new FormGroup({
    digit1: new FormControl('', [Validators.required]),
    digit2: new FormControl('', [Validators.required]),
    digit3: new FormControl('', [Validators.required]),
    digit4: new FormControl('', [Validators.required]),
    digit5: new FormControl('', [Validators.required]),
    digit6: new FormControl('', [Validators.required])
  });

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
            <h5 class="modal-title">Aviso</h5>
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

  autenticar(): void {
    if (this.tokenForm && this.tokenForm.value &&
        this.tokenForm.value.digit1 !== null && this.tokenForm.value.digit1 !== undefined &&
        this.tokenForm.value.digit2 !== null && this.tokenForm.value.digit2 !== undefined &&
        this.tokenForm.value.digit3 !== null && this.tokenForm.value.digit3 !== undefined &&
        this.tokenForm.value.digit4 !== null && this.tokenForm.value.digit4 !== undefined &&
        this.tokenForm.value.digit5 !== null && this.tokenForm.value.digit5 !== undefined &&
        this.tokenForm.value.digit6 !== null && this.tokenForm.value.digit6 !== undefined) {

      const enteredToken =
        this.tokenForm.value.digit1 +
        this.tokenForm.value.digit2 +
        this.tokenForm.value.digit3 +
        this.tokenForm.value.digit4 +
        this.tokenForm.value.digit5 +
        this.tokenForm.value.digit6;

      if (enteredToken === this.user.token) {
        localStorage.setItem('token', this.user.token);
        this.rota.navigateByUrl('/cliente');
      } else {
        this.exibirModalErro("Token inválido! Por favor, tente novamente.");
      }
      this.tokenForm.reset();
    }
  }
}
