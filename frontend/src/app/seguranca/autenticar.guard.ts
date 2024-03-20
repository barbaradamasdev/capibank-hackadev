import { CanActivateFn, Router } from '@angular/router';

export const autenticarGuard: CanActivateFn = (route, state) => {
  const rota = new Router;

  if (localStorage.getItem('email') == undefined){
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

    const closeModalButton = modalElement.querySelector('.close, .btn-secondary');

    if (closeModalButton) {
      closeModalButton.addEventListener('click', () => {
        rota.navigateByUrl("/login");
        modalElement.remove();
      });
    }

    modalElement.classList.add('show');
    modalElement.style.display = 'block';

    setTimeout(() => {
      rota.navigateByUrl("/login");
      modalElement.remove();
    }, 2000);

    return false; 
  }

  return true;
};
