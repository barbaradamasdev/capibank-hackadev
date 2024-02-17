import { Component } from '@angular/core';
import { CabecalhoLoginComponent } from "../../componentes/cabecalho-login/cabecalho-login.component";
import { RodapeLoginComponent } from "../../componentes/rodape-login/rodape-login.component";
import { FormularioRecuperarPgUmComponent } from "../../componentes/formulario-recuperar-pg-um/formulario-recuperar-pg-um.component";
import { FormularioRecuperarPgTresComponent } from "../../componentes/formulario-recuperar-pg-tres/formulario-recuperar-pg-tres.component";
import { InicioBannerComponent } from "../../componentes/inicio-banner/inicio-banner.component";

@Component({
    selector: 'app-inicio-recuperar-senha',
    standalone: true,
    templateUrl: './inicio-recuperar-senha.component.html',
    styleUrl: './inicio-recuperar-senha.component.css',
    imports: [InicioBannerComponent, CabecalhoLoginComponent, RodapeLoginComponent]
})
export class InicioRecuperarSenhaComponent {

}
