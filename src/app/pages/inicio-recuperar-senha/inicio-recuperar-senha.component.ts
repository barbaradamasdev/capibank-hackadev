import { Component } from '@angular/core';
import { CabecalhoLoginComponent } from "../../componentes/cabecalho-login/cabecalho-login.component";
import { RodapeLoginComponent } from "../../componentes/rodape-login/rodape-login.component";
import { FormularioRecuperarCodigoComponent } from "../../componentes/formulario-recuperar-codigo/formulario-recuperar-codigo.component";

@Component({
    selector: 'app-inicio-recuperar-senha',
    standalone: true,
    templateUrl: './inicio-recuperar-senha.component.html',
    styleUrl: './inicio-recuperar-senha.component.css',
    imports: [CabecalhoLoginComponent, RodapeLoginComponent, FormularioRecuperarCodigoComponent]
})
export class InicioRecuperarSenhaComponent {

}
