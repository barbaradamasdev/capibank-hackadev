import { Component } from '@angular/core';
import { CabecalhoLoginComponent } from "../../componentes/cabecalho-login/cabecalho-login.component";
import { RodapeLoginComponent } from "../../componentes/rodape-login/rodape-login.component";
import { EsqueciSenhaLoginComponent } from "../../componentes/esqueci-senha-login/esqueci-senha-login.component";
import { FormularioRecuperarPgUmComponent } from "../../componentes/formulario-recuperar-pg-um/formulario-recuperar-pg-um.component";
import { FormularioRecuperarPgDoisComponent } from "../../componentes/formulario-recuperar-pg-dois/formulario-recuperar-pg-dois.component";
import { FormularioRecuperarPgTresComponent } from "../../componentes/formulario-recuperar-pg-tres/formulario-recuperar-pg-tres.component";

@Component({
    selector: 'app-inicio-recuperar-senha',
    standalone: true,
    templateUrl: './inicio-recuperar-senha.component.html',
    styleUrl: './inicio-recuperar-senha.component.css',
    imports: [CabecalhoLoginComponent, RodapeLoginComponent, FormularioRecuperarPgDoisComponent, FormularioRecuperarPgUmComponent, FormularioRecuperarPgTresComponent]
})
export class InicioRecuperarSenhaComponent {

}
