import { Routes } from '@angular/router';
import { AreaDoClienteComponent } from './pages/area-do-cliente/area-do-cliente.component';
import { InicioRecuperarSenhaComponent } from './pages/inicio-recuperar-senha/inicio-recuperar-senha.component';
import { InicioCriarContaComponent } from './pages/inicio-criar-conta/inicio-criar-conta.component';
import { InicioLoginComponent } from './pages/inicio-login/inicio-login.component';
import { HistoricoTransacoesComponent } from './componentes/historico-transacoes/historico-transacoes.component';
import { HistoricoDeTransacaoComponent } from './pages/historico-de-transacao/historico-de-transacao.component';
import { FormularioCriarContaPgUmComponent } from './pages/inicio-criar-conta/forms/formulario-criar-conta-pg-um/formulario-criar-conta-pg-um.component';
import { FormularioCriarContaPgDoisComponent } from './pages/inicio-criar-conta/forms/formulario-criar-conta-pg-dois/formulario-criar-conta-pg-dois.component';
import { FormularioCriarContaPgTresComponent } from './pages/inicio-criar-conta/forms/formulario-criar-conta-pg-tres/formulario-criar-conta-pg-tres.component';
export const routes: Routes = [
    {path:'login',component:InicioLoginComponent},
    {path:'cadastrar',
    component:InicioCriarContaComponent,
    children:[
      {
      path:'passo-1',
      component: FormularioCriarContaPgUmComponent
      },
      {
      path:'passo-2',
      component: FormularioCriarContaPgDoisComponent
      },
      {
        path:'passo-3',
        component: FormularioCriarContaPgTresComponent
      }
    ]
  },
    {path:'recuperar',component:InicioRecuperarSenhaComponent},
    {path:'cliente',component:AreaDoClienteComponent},
    {path:'historico',component:HistoricoDeTransacaoComponent},

    // {path:'',redirectTo:'cliente',pathMatch:'full'}
];
