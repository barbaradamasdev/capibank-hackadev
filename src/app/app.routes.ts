import { Routes } from '@angular/router';
import { AreaDoClienteComponent } from './pages/area-do-cliente/area-do-cliente.component';

export const routes: Routes = [
    {path:'cliente',component:AreaDoClienteComponent},
    {path:'',redirectTo:'cliente',pathMatch:'full'}
];
