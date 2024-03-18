import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-chamado',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form-chamado.component.html',
  styleUrl: './form-chamado.component.css'
})
export class FormChamadoComponent {
  chamado = new FormGroup({
    descricao: new FormControl('', Validators.required),
  });

  exibirModal(mensagem: string): void {
    const modalElement = document.createElement('div');
    modalElement.classList.add('modal', 'fade');
    modalElement.innerHTML = `
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" style="color: green">Enviado</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>${mensagem}</p>
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
    }, 3000);
  }

  enviarChamado():void{
    this.exibirModal("Chamado enviado com sucesso! Aguarde o retorno em até 1 dia útil.");
  }
}
