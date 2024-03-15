import { Component } from '@angular/core';
import { CabecalhoHomeComponent } from "../../componentes/cabecalho-home/cabecalho-home.component";
import { RodapeHomeComponent } from "../../componentes/rodape-home/rodape-home.component";

@Component({
    selector: 'app-home-landing-page',
    standalone: true,
    templateUrl: './home-landing-page.component.html',
    styleUrl: './home-landing-page.component.css',
    imports: [CabecalhoHomeComponent, RodapeHomeComponent]
})
export class HomeLandingPageComponent {

}
