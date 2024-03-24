import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../../Services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-chamado',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './form-chamado.component.html',
  styleUrl: './form-chamado.component.css'
})
export class FormChamadoComponent {
  chamado: FormGroup;
  sucessMessage!: string;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
  ) {
    this.chamado = this.formBuilder.group({
      descricao: ['', Validators.required]
    });
  }

  onSubmit(event: Event): void {
    event.preventDefault();

    console.log(this.chamado.get('descricao')?.value);
    if (this.chamado.valid) {
      const dados = {
        titularId: this.apiService.idTitularLogado,
        descricao: this.chamado.get('descricao')?.value,
        resposta: 'nao sei'
      };

      // this.apiService.PostAtendimento(dados).subscribe(response => {
      //   console.log('Resposta do servidor:', response);

      // }, error => {
      //   console.error('Erro ao enviar dados:', error);
      // });

      this.sucessMessage = "Chamado enviado com sucesso! Aguarde o retorno em até 1 dia útil.";
      this.exibirModal("Chamado enviado com sucesso! Aguarde o retorno em até 1 dia útil.");
    } else {
      alert('Preencha todos os campos')
    }
  }

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
}
