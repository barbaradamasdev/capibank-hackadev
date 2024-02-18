import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BannerToggleService } from '../../servicos/banner-toggle.service';

@Component({
  selector: 'app-cabecalho-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cabecalho-login.component.html',
  styleUrl: './cabecalho-login.component.css'
})
export class CabecalhoLoginComponent {
  constructor(private bannerService: BannerToggleService) {}

  toggleBanner() {
    this.bannerService.toggleBanner();
  }

}
