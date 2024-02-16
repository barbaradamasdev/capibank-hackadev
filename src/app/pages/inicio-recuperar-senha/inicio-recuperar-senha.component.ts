import { Component } from '@angular/core';
import { CabecalhoLoginComponent } from "../../componentes/cabecalho-login/cabecalho-login.component";
import { RodapeLoginComponent } from "../../componentes/rodape-login/rodape-login.component";
import { FormularioRecuperarCodigoComponent } from "../../componentes/formulario-recuperar-codigo/formulario-recuperar-codigo.component";
import { FormularioCriarSucessoComponent } from "../../componentes/formulario-criar-sucesso/formulario-criar-sucesso.component";
import { CriarContaLinkComponent } from "../../componentes/criar-conta-link/criar-conta-link.component";
import { EsqueciSenhaLoginComponent } from "../../componentes/esqueci-senha-login/esqueci-senha-login.component";
import { FormularioCriarNomeComponent } from "../../componentes/formulario-criar-nome/formulario-criar-nome.component";
import { FormularioRecuperarCriarNovaSenhaComponent } from "../../components/formulario-recuperar-criar-nova-senha/formulario-recuperar-criar-nova-senha.component";
import { FormularioRecuperarPgUmComponent } from "../../componentes/formulario-recuperar-pg-um/formulario-recuperar-pg-um.component";
import { FormularioRecuperarPgTresComponent } from "../../componentes/formulario-recuperar-pg-tres/formulario-recuperar-pg-tres.component";
import { FormularioRecuperarPgDoisComponent } from "../../componentes/formulario-recuperar-pg-dois/formulario-recuperar-pg-dois.component";

@Component({
    selector: 'app-inicio-recuperar-senha',
    standalone: true,
    templateUrl: './inicio-recuperar-senha.component.html',
    styleUrl: './inicio-recuperar-senha.component.css',
    imports: [CabecalhoLoginComponent, FormularioRecuperarPgUmComponent, RodapeLoginComponent, FormularioRecuperarPgTresComponent, FormularioRecuperarPgDoisComponent]
})
export class InicioRecuperarSenhaComponent {

}
