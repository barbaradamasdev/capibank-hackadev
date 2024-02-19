import { CanActivateFn, Router } from '@angular/router';

export const autenticarGuard: CanActivateFn = (route, state) => {
  const rota = new Router;

  if (localStorage.getItem('email') == undefined){
    // TODO estilizar aviso com modal bootstrap
    alert("Favor realizar o login novamente!!!")
    rota.navigateByUrl("/login")
  }
  return true;
};
