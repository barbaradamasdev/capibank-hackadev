import { Component, Input, NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario-criar-conta-pg-um',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './formulario-criar-conta-pg-um.component.html',
  styleUrls: ['../../../../../form.css', './formulario-criar-conta-pg-um.component.css']
})
export class FormularioCriarContaPgUmComponent {
  @Input() email: string = '';

}
