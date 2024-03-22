import { Component } from '@angular/core';
import { CabecalhoHomeComponent } from "../../componentes/cabecalho-home/cabecalho-home.component";
import { RodapeHomeComponent } from "../../componentes/rodape-home/rodape-home.component";
import { CapividaBannerInicialComponent } from "../../componentes/capivida-banner-inicial/capivida-banner-inicial.component";
import { CapividaPilaresComponent } from  '../../componentes/capivida-pilares/capivida-pilares.component';
import { CapividaCtaComponent } from  '../../componentes/capivida-cta/capivida-cta.component';
import { Title } from '@angular/platform-browser';


@Component({
    selector: 'app-capivida',
    standalone: true,
    templateUrl: './capivida.component.html',
    styleUrl: './capivida.component.css',
    imports: [CabecalhoHomeComponent, RodapeHomeComponent, CapividaBannerInicialComponent, CapividaPilaresComponent, CapividaCtaComponent]
})
export class CapividaComponent {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Capibank - Projeto Capivida');
  }

}

