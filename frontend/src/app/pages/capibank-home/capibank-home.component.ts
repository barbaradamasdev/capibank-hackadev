import { Component } from '@angular/core';
import { CabecalhoHomeComponent } from "../../componentes/cabecalho-home/cabecalho-home.component";
import { RodapeHomeComponent } from "../../componentes/rodape-home/rodape-home.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeBannerCheioComponent } from "../../componentes/home-banner-cheio/home-banner-cheio.component";
import { CapividaBannerInicialComponent } from "../../componentes/capivida-banner-inicial/capivida-banner-inicial.component";
import { HomeSecaoInicioComponent } from "../../componentes/home-secao-inicio/home-secao-inicio.component";
import { HomeBeneficiosComponent } from "../../componentes/home-beneficios/home-beneficios.component";
import { HomeMaquininhaComponent } from "../../componentes/home-maquininha/home-maquininha.component";
import { HomeCtaComponent } from "../../componentes/home-cta/home-cta.component";
import { HomeDepoimentosComponent } from "../../componentes/home-depoimentos/home-depoimentos.component";
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-capibank-home',
    standalone: true,
    templateUrl: './capibank-home.component.html',
    styleUrl: './capibank-home.component.css',
    imports: [RouterOutlet, RouterLink, CabecalhoHomeComponent, RodapeHomeComponent, HomeBannerCheioComponent, CapividaBannerInicialComponent, HomeSecaoInicioComponent, HomeBeneficiosComponent, HomeMaquininhaComponent, HomeCtaComponent, HomeDepoimentosComponent]
})
export class CapibankHomeComponent {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Capibank - O seu banco');
  }

}
