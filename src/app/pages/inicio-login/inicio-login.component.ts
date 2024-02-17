import { Component } from '@angular/core';
import { CabecalhoLoginComponent } from "../../componentes/cabecalho-login/cabecalho-login.component";
import { RodapeLoginComponent } from "../../componentes/rodape-login/rodape-login.component";
import { FormularioEntrarComponent } from "../../pages/inicio-login/formulario-entrar/formulario-entrar.component";
import { Cliente } from '../../Models/Cliente';
import { InicioBannerComponent } from "../../componentes/inicio-banner/inicio-banner.component";

@Component({
    selector: 'app-inicio-login',
    standalone: true,
    templateUrl: './inicio-login.component.html',
    styleUrl: './inicio-login.component.css',
    imports: [CabecalhoLoginComponent, RodapeLoginComponent, FormularioEntrarComponent, InicioBannerComponent]
})
export class InicioLoginComponent {


}
