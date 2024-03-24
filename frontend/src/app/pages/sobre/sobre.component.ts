import { Component } from '@angular/core';
import { CabecalhoHomeComponent } from "../../componentes/cabecalho-home/cabecalho-home.component";
import { ProjetoComponent } from "../../pages/sobre/componentes/projeto/projeto.component";
import { EquipeComponent } from "../../pages/sobre/componentes/equipe/equipe.component";
import { AgradecimentoComponent } from "../../pages/sobre/componentes/agradecimento/agradecimento.component";
import { RodapeHomeComponent } from "../../componentes/rodape-home/rodape-home.component";
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-sobre',
    standalone: true,
    templateUrl: './sobre.component.html',
    styleUrl: './sobre.component.css',
    imports: [CabecalhoHomeComponent, RodapeHomeComponent, ProjetoComponent, EquipeComponent, AgradecimentoComponent]
})
export class SobreComponent {
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Capibank - Sobre');
  }

}
