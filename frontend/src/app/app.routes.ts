import { Routes } from '@angular/router';
import { AreaDoClienteComponent } from './pages/area-do-cliente/area-do-cliente.component';
import { InicioRecuperarSenhaComponent } from './pages/inicio-recuperar-senha/inicio-recuperar-senha.component';
import { InicioCriarContaComponent } from './pages/inicio-criar-conta/inicio-criar-conta.component';
import { InicioLoginComponent } from './pages/inicio-login/inicio-login.component';
import { TokenComponent } from './pages/inicio-login/forms/token/token.component';
import { HistoricoDeTransacaoComponent } from './pages/area-do-cliente/historico-de-transacao/historico-de-transacao.component';
import { FormularioCriarContaPgUmComponent } from './pages/inicio-criar-conta/forms/formulario-criar-conta-pg-um/formulario-criar-conta-pg-um.component';
import { FormularioCriarContaPgDoisComponent } from './pages/inicio-criar-conta/forms/formulario-criar-conta-pg-dois/formulario-criar-conta-pg-dois.component';
import { FormularioCriarContaPgTresComponent } from './pages/inicio-criar-conta/forms/formulario-criar-conta-pg-tres/formulario-criar-conta-pg-tres.component';
import { FormularioCriarContaPgQuatroComponent } from './pages/inicio-criar-conta/forms/formulario-criar-conta-pg-quatro/formulario-criar-conta-pg-quatro.component';
import { autenticarGuard } from './seguranca/autenticar.guard';
import { FormularioRecuperarPgUmComponent } from './pages/inicio-recuperar-senha/forms/formulario-recuperar-pg-um/formulario-recuperar-pg-um.component';
import { FormularioRecuperarPgDoisComponent } from './pages/inicio-recuperar-senha/forms/formulario-recuperar-pg-dois/formulario-recuperar-pg-dois.component';
import { FormularioRecuperarPgTresComponent } from './pages/inicio-recuperar-senha/forms/formulario-recuperar-pg-tres/formulario-recuperar-pg-tres.component';
import { CapividaComponent } from './pages/capivida/capivida.component';
import { CapibankHomeComponent } from './pages/capibank-home/capibank-home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ChamadoComponent } from './pages/area-do-cliente/chamado/chamado.component';
import { SegurancaComponent } from './pages/area-do-cliente/seguranca/seguranca.component';
import { ConfiguracaoComponent } from './pages/area-do-cliente/configuracao/configuracao.component';
import { FormularioEntrarComponent } from './pages/inicio-login/forms/formulario-entrar/formulario-entrar.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { InicioComponent } from './pages/area-do-cliente/inicio/inicio.component';
import { NovaTransacaoComponent } from './pages/area-do-cliente/nova-transacao/nova-transacao.component';
import { SaqueComponent } from './pages/area-do-cliente/nova-transacao/saque/saque.component';
import { DepositoComponent } from './pages/area-do-cliente/nova-transacao/deposito/deposito.component';
import { TransferenciaComponent } from './pages/area-do-cliente/nova-transacao/transferencia/transferencia.component';
import { ConfirmacaoDepositoComponent } from './pages/area-do-cliente/nova-transacao/deposito/confirmacao-deposito/confirmacao-deposito.component';
import { ConfirmacaoSaqueComponent } from './pages/area-do-cliente/nova-transacao/saque/confirmacao-saque/confirmacao-saque.component';
import { ConfirmacaoTransferenciaComponent } from './pages/area-do-cliente/nova-transacao/transferencia/confirmacao-transferencia/confirmacao-transferencia.component';
import { DestinatarioComponent } from './pages/area-do-cliente/nova-transacao/transferencia/destinatario/destinatario.component';
import { ValidacaoComponent } from './pages/area-do-cliente/nova-transacao/transferencia/validacao/validacao.component';
import { ClientesComponent } from './pages/admin-dashboard/clientes/clientes.component';
import { TransacoesComponent } from './pages/admin-dashboard/transacoes/transacoes.component';
import { RelatoriosComponent } from './pages/admin-dashboard/relatorios/relatorios.component';
import { ConfigAdminComponent } from './pages/admin-dashboard/config-admin/config-admin.component';
import { DashboardComponent } from './pages/admin-dashboard/dashboard/dashboard.component';
import { FormularioCriarContaPgCincoComponent } from './pages/inicio-criar-conta/forms/formulario-criar-conta-pg-cinco/formulario-criar-conta-pg-cinco.component';

export const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full',},
    {path:'home',component:CapibankHomeComponent},
    {path:'capivida',component:CapividaComponent},
    {path:'sobre',component:SobreComponent},
    {path:'loginadmin',component:AdminLoginComponent},
    {path:'admin',component:AdminDashboardComponent,
    children:[
      {
      path:'',
      component: DashboardComponent
      },
      {
      path:'clientes',
      component: ClientesComponent
      },
      {
      path:'transacoes',
      component: TransacoesComponent
      },
      {
      path:'relatorios',
      component: RelatoriosComponent
      },
      {
      path:'configuracoes',
      component: ConfigAdminComponent
      },
    ],
    },
    {path:'login',component:InicioLoginComponent,
    children:[
      {
      path:'',
      component: FormularioEntrarComponent
      },
      {
      path:'token',
      component: TokenComponent
      }],
    },
    {path:'cliente',component:AreaDoClienteComponent, canActivate:[autenticarGuard],
    children:[
      {
      path:'',
      component: InicioComponent
      },
      {
        path:'nova',
        component: NovaTransacaoComponent,
        children: [
          {
            path: 'saque',
            component: SaqueComponent
          },
          {
            path: 'saque/ok/:idTransacao',
            component: ConfirmacaoSaqueComponent,
          },
          {
            path: 'deposito',
            component: DepositoComponent
          },
          {
            path: 'deposito/ok/:idTransacao',
            component: ConfirmacaoDepositoComponent,
          },
          {
            path: 'transferencia',
            component: TransferenciaComponent,
          },
          {
            path: 'transferencia/destinatario',
            component: DestinatarioComponent,
          },
          {
            path: 'transferencia/validacao',
            component: ValidacaoComponent,
          },
          {
            path: 'transferencia/ok/:idTransacao',
            component: ConfirmacaoTransferenciaComponent,
          }
        ]
      },
      {
      path:'historico',
      component: HistoricoDeTransacaoComponent
      },
      {
      path:'config',
      component: ConfiguracaoComponent
      },
      {
      path:'chamado',
      component: ChamadoComponent
      },
      {
      path:'seguranca',
      component: SegurancaComponent
      }
      ],
    },
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
        }]
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
        },
        {
          path:'passo-5',
          component: FormularioCriarContaPgCincoComponent
        }
      ]
    }

];
