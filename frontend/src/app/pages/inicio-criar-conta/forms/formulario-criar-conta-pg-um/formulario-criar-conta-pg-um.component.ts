import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario-criar-conta-pg-um',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './formulario-criar-conta-pg-um.component.html',
  styleUrls: ['../../../../../form.css', './formulario-criar-conta-pg-um.component.css']
})
export class FormularioCriarContaPgUmComponent {
  passoUmForm: FormGroup;
  errorMessage!: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.passoUmForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onCpfInput(event: any): void {
    const inputValue = event.target.value;
    this.passoUmForm.patchValue({
      cpf: inputValue.replace(/\D/g, '')
    });
  }

  onBlurCpf(): void {
    const cpfValue = this.passoUmForm.get('cpf')?.value;

    if (cpfValue && cpfValue.length === 11) {
      this.errorMessage = '';
    } else {
      this.errorMessage = 'CPF inválido, precisa ter 11 dígitos';
    }
  }

  onBlurEmail(): void {
    const emailValue = this.passoUmForm.get('email')?.value;

    if (emailValue && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      this.errorMessage = '';
    } else {
      this.errorMessage = 'E-mail inválido';
    }
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.passoUmForm.valid) {
      localStorage.setItem('dadosPassoUm', JSON.stringify(this.passoUmForm.value));
      this.router.navigateByUrl('/cadastrar/passo-2');
    } else {
      alert("Todos os campos são obrigatórios");
    }
  }
}
