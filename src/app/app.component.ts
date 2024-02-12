import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InicioCriarContaComponent } from './pages/inicio-criar-conta/inicio-criar-conta.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, InicioCriarContaComponent]
})
export class AppComponent {
  title = 'capibank';

}
