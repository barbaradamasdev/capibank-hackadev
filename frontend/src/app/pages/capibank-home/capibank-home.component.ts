import { Component } from '@angular/core';
import { CabecalhoHomeComponent } from "../../componentes/cabecalho-home/cabecalho-home.component";
import { RodapeHomeComponent } from "../../componentes/rodape-home/rodape-home.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeBannerCheioComponent } from "../../componentes/home-banner-cheio/home-banner-cheio.component";
import { HomeBannerInicialComponent } from "../../componentes/home-banner-inicial/home-banner-inicial.component";
import { CapividaBannerInicialComponent } from "../../componentes/capivida-banner-inicial/capivida-banner-inicial.component";

@Component({
    selector: 'app-capibank-home',
    standalone: true,
    templateUrl: './capibank-home.component.html',
    styleUrl: './capibank-home.component.css',
    imports: [RouterOutlet, RouterLink, CabecalhoHomeComponent, RodapeHomeComponent, HomeBannerCheioComponent, HomeBannerInicialComponent, CapividaBannerInicialComponent]
})
export class CapibankHomeComponent {

}
