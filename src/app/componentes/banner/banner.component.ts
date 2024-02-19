import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BannerToggleService } from '../../servicos/banner-toggle.service';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  showBanner: boolean = false;

  // constructor(private BannerToggleService: BannerToggleService) {}

  // ngOnInit() {
  //   this.BannerToggleService.bannerToggle$.subscribe((toggle) => {
  //     this.showBanner = toggle;
  //   });
  // }

  // toggleBanner() {
  //   this.BannerToggleService.toggleBanner();
  // }
}
