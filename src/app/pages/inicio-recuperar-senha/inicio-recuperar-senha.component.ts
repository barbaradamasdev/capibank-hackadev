import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoLoginComponent } from "../../componentes/cabecalho-login/cabecalho-login.component";
import { RodapeLoginComponent } from "../../componentes/rodape-login/rodape-login.component";
import { BannerComponent } from "../../componentes/banner/banner.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-inicio-recuperar-senha',
    standalone: true,
    templateUrl: './inicio-recuperar-senha.component.html',
    styleUrl: './inicio-recuperar-senha.component.css',
    imports: [RouterOutlet, RouterLink, CommonModule, BannerComponent, CabecalhoLoginComponent, RodapeLoginComponent]
})
export class InicioRecuperarSenhaComponent {

}
