import { Routes } from '@angular/router';
import { AreaDoClienteComponent } from './pages/area-do-cliente/area-do-cliente.component';
import { InicioLoginComponent } from './pages/inicio-login/inicio-login.component';
import { InicioCriarContaComponent } from './pages/inicio-criar-conta/inicio-criar-conta.component';

export const routes: Routes = [
    {path:'cliente',component:AreaDoClienteComponent},
    {path:'inicio',component:InicioLoginComponent},
    {path:'criarconta',component:InicioCriarContaComponent},
    {path:'',redirectTo:'inicio',pathMatch:'full'}
];
