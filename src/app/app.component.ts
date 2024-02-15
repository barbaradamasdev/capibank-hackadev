import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InicioCriarContaComponent } from './pages/inicio-criar-conta/inicio-criar-conta.component';
import { InicioRecuperarSenhaComponent } from "./pages/inicio-recuperar-senha/inicio-recuperar-senha.component";
import { InicioLoginComponent } from "./pages/inicio-login/inicio-login.component";
import { AreaDoClienteComponent } from "./pages/area-do-cliente/area-do-cliente.component";
import { HistoricoDeTransacaoComponent } from "./pages/historico-de-transacao/historico-de-transacao.component";
import { CabecalhoAreaInternaComponent } from "./componentes/cabecalho-area-interna/cabecalho-area-interna.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, InicioCriarContaComponent, InicioRecuperarSenhaComponent, InicioLoginComponent, AreaDoClienteComponent, HistoricoDeTransacaoComponent, CabecalhoAreaInternaComponent]
})
export class AppComponent {
  title = 'capibank';

}
