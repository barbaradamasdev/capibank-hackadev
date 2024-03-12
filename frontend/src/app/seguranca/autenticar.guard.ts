import { CanActivateFn, Router } from '@angular/router';

export const autenticarGuard: CanActivateFn = (route, state) => {
  const rota = new Router;

  if (localStorage.getItem('email') == undefined){
    // Criar um modal Bootstrap
    const modalElement = document.createElement('div');
    modalElement.classList.add('modal', 'fade');
    modalElement.innerHTML = `
      <div class="modal-dialog">
        <div class="modal-content ">
          <div class="modal-header">
            <h5 class="modal-title">Aviso</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Favor realizar o login novamente!!!</p>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modalElement);

    // Adicionar evento de clique para fechar o modal
    const closeModalButton = modalElement.querySelector('.close, .btn-secondary');

    // Verificar se o botão de fechar foi encontrado antes de adicionar o evento
    if (closeModalButton) {
      closeModalButton.addEventListener('click', () => {
        rota.navigateByUrl("/login");
        modalElement.remove(); // Remover o elemento do modal do DOM após fechar
      });
    }

    // Adicionar classe 'show' para exibir o modal
    modalElement.classList.add('show');
    modalElement.style.display = 'block';

    setTimeout(() => {
      rota.navigateByUrl("/login");
      modalElement.remove();
    }, 2000);

    return false; // Retorna false para evitar a navegação quando o usuário não está autenticado
  }

  return true;
};
