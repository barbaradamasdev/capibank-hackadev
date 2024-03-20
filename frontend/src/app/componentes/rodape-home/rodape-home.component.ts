import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-rodape-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './rodape-home.component.html',
  styleUrl: './rodape-home.component.css'
})
export class RodapeHomeComponent {

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0);
      });
  }
}
