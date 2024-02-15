import { Component } from '@angular/core';
import { CabecalhoLoginComponent } from "../../componentes/cabecalho-login/cabecalho-login.component";
import { RodapeLoginComponent } from "../../componentes/rodape-login/rodape-login.component";
import { FormularioEntrarComponent } from "../../componentes/formulario-entrar/formulario-entrar.component";
import { Cliente } from '../../Models/Cliente';

@Component({
    selector: 'app-inicio-login',
    standalone: true,
    templateUrl: './inicio-login.component.html',
    styleUrl: './inicio-login.component.css',
    imports: [CabecalhoLoginComponent, RodapeLoginComponent, FormularioEntrarComponent]
})
export class InicioLoginComponent {
    

}
