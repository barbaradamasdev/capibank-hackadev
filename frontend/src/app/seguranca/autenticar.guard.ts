import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../Services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticarGuard implements CanActivate {

  constructor(private apiService: ApiService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (!this.apiService.idTitularLogado) {
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
        </div>`;
      document.body.appendChild(modalElement);

      const closeModalButton = modalElement.querySelector('.close, .btn-secondary');

      if (closeModalButton) {
        closeModalButton.addEventListener('click', () => {
          this.router.navigateByUrl("/login");
          modalElement.remove();
        });
      }

      modalElement.classList.add('show');
      modalElement.style.display = 'block';

      setTimeout(() => {
        this.router.navigateByUrl("/login");
        modalElement.remove();
      }, 2000);

      return false;
    }

    return true;
  }
}
