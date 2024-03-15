import { Routes } from '@angular/router';
import { AreaDoClienteComponent } from './pages/area-do-cliente/area-do-cliente.component';
import { InicioRecuperarSenhaComponent } from './pages/inicio-recuperar-senha/inicio-recuperar-senha.component';
import { InicioCriarContaComponent } from './pages/inicio-criar-conta/inicio-criar-conta.component';
import { InicioLoginComponent } from './pages/inicio-login/inicio-login.component';
import { HistoricoDeTransacaoComponent } from './pages/historico-de-transacao/historico-de-transacao.component';
import { FormularioCriarContaPgUmComponent } from './pages/inicio-criar-conta/forms/formulario-criar-conta-pg-um/formulario-criar-conta-pg-um.component';
import { FormularioCriarContaPgDoisComponent } from './pages/inicio-criar-conta/forms/formulario-criar-conta-pg-dois/formulario-criar-conta-pg-dois.component';
import { FormularioCriarContaPgTresComponent } from './pages/inicio-criar-conta/forms/formulario-criar-conta-pg-tres/formulario-criar-conta-pg-tres.component';
import { FormularioCriarContaPgQuatroComponent } from './pages/inicio-criar-conta/forms/formulario-criar-conta-pg-quatro/formulario-criar-conta-pg-quatro.component';
import { autenticarGuard } from './seguranca/autenticar.guard';
import { FormularioRecuperarPgUmComponent } from './pages/inicio-recuperar-senha/forms/formulario-recuperar-pg-um/formulario-recuperar-pg-um.component';
import { FormularioRecuperarPgDoisComponent } from './pages/inicio-recuperar-senha/forms/formulario-recuperar-pg-dois/formulario-recuperar-pg-dois.component';
import { FormularioRecuperarPgTresComponent } from './pages/inicio-recuperar-senha/forms/formulario-recuperar-pg-tres/formulario-recuperar-pg-tres.component';
import { HomeLandingPageComponent } from './pages/home-landing-page/home-landing-page.component';


export const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    //{path:'',redirectTo:'/login',pathMatch:'full'},
    {path:'home',component:HomeLandingPageComponent},
    {path:'login',component:InicioLoginComponent},
    {path:'cliente',component:AreaDoClienteComponent, canActivate:[autenticarGuard]},
    {path:'historico',component:HistoricoDeTransacaoComponent,canActivate:[autenticarGuard]},
    {path:'recuperar',component:InicioRecuperarSenhaComponent,
    children:[
      {
      path:'passo-1',
      component: FormularioRecuperarPgUmComponent
      },
      {
      path:'passo-2',
      component: FormularioRecuperarPgDoisComponent
      },
      {
        path:'passo-3',
        component: FormularioRecuperarPgTresComponent
      }
    ]
  },
  {path:'cadastrar',component:InicioCriarContaComponent,
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
      },
      {
        path:'passo-4',
        component: FormularioCriarContaPgQuatroComponent
      }
    ]
  }

];
