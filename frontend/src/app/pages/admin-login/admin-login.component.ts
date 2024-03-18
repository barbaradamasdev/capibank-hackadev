import { Component } from '@angular/core';
import { CabecalhoLoginComponent } from "../../componentes/cabecalho-login/cabecalho-login.component";
import { RodapeLoginComponent } from "../../componentes/rodape-login/rodape-login.component";
import { BannerComponent } from "../../componentes/banner/banner.component";
import { FormAdminLoginComponent } from "../../pages/admin-login/form-admin-login/form-admin-login.component";
import { HeaderComponent } from "../../pages/admin-login/header/header.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-admin-login',
    standalone: true,
    templateUrl: './admin-login.component.html',
    styleUrl: './admin-login.component.css',
    imports: [RouterOutlet, CabecalhoLoginComponent, RodapeLoginComponent, BannerComponent, FormAdminLoginComponent, HeaderComponent]
})
export class AdminLoginComponent {

}
