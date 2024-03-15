import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerToggleService {
  private bannerToggleSource = new BehaviorSubject<boolean>(false);
  bannerToggle$ = this.bannerToggleSource.asObservable();

  toggleBanner() {
    this.bannerToggleSource.next(!this.bannerToggleSource.value);
  }
}
