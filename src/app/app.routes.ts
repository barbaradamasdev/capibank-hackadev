import { Routes } from '@angular/router';
import { AreaDoClienteComponent } from './pages/area-do-cliente/area-do-cliente.component';
import { InicioRecuperarSenhaComponent } from './pages/inicio-recuperar-senha/inicio-recuperar-senha.component';
import { InicioCriarContaComponent } from './pages/inicio-criar-conta/inicio-criar-conta.component';
import { InicioLoginComponent } from './pages/inicio-login/inicio-login.component';
import { HistoricoTransacoesComponent } from './componentes/historico-transacoes/historico-transacoes.component';
import { HistoricoDeTransacaoComponent } from './pages/historico-de-transacao/historico-de-transacao.component';

export const routes: Routes = [
    {path:'login',component:InicioLoginComponent},
    {path:'cadastrar',component:InicioCriarContaComponent},
    {path:'recuperar',component:InicioRecuperarSenhaComponent},
    {path:'cliente',component:AreaDoClienteComponent},
    {path:'historico',component:HistoricoDeTransacaoComponent},
    // {path:'',redirectTo:'cliente',pathMatch:'full'}
];
