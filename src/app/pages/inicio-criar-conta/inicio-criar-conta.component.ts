import { Component } from '@angular/core';
import { CabecalhoLoginComponent } from "../../componentes/cabecalho-login/cabecalho-login.component";
import { RodapeLoginComponent } from "../../componentes/rodape-login/rodape-login.component";
import { FormularioCriarNomeComponent } from "../../componentes/formulario-criar-nome/formulario-criar-nome.component";
import { FormularioCriarContaPgUmComponent } from '../../componentes/formulario-criar-conta-pg-um/formulario-criar-conta-pg-um.component';

@Component({
    selector: 'app-inicio-criar-conta',
    standalone: true,
    templateUrl: './inicio-criar-conta.component.html',
    styleUrl: './inicio-criar-conta.component.css',
    imports: [CabecalhoLoginComponent, RodapeLoginComponent, FormularioCriarNomeComponent, FormularioCriarContaPgUmComponent]
})
export class InicioCriarContaComponent {

}
