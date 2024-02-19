import { Component } from '@angular/core';
import { CabecalhoLoginComponent } from "../../componentes/cabecalho-login/cabecalho-login.component";
import { RodapeLoginComponent } from "../../componentes/rodape-login/rodape-login.component";
import { FormularioRecuperarPgUmComponent } from "./forms/formulario-recuperar-pg-um/formulario-recuperar-pg-um.component";
import { FormularioRecuperarPgDoisComponent } from './forms/formulario-recuperar-pg-dois/formulario-recuperar-pg-dois.component';
import { FormularioRecuperarPgTresComponent } from "./forms/formulario-recuperar-pg-tres/formulario-recuperar-pg-tres.component";
import { BannerComponent } from "../../componentes/banner/banner.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-inicio-recuperar-senha',
    standalone: true,
    templateUrl: './inicio-recuperar-senha.component.html',
    styleUrl: './inicio-recuperar-senha.component.css',
    imports: [RouterOutlet, RouterLink, CommonModule, BannerComponent, CabecalhoLoginComponent, RodapeLoginComponent]
})
export class InicioRecuperarSenhaComponent {

}
