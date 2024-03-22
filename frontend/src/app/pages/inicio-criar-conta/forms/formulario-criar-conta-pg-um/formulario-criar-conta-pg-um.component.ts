import { Component, Input, NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../../../Services/api.service';

@Component({
  selector: 'app-formulario-criar-conta-pg-um',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './formulario-criar-conta-pg-um.component.html',
  styleUrls: ['../../../../../form.css', './formulario-criar-conta-pg-um.component.css']
})
export class FormularioCriarContaPgUmComponent {
  passoUmForm: FormGroup;

  constructor(
    private apiService: ApiService,
     private formBuilder: FormBuilder,
     private router: Router,
     ) {
    this.passoUmForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.passoUmForm.valid) {
      localStorage.setItem('dadosPassoUm', JSON.stringify(this.passoUmForm.value));
      this.router.navigateByUrl('/cadastrar/passo-2');
    } else {
      alert("Erro no envio")    }
  }
}
