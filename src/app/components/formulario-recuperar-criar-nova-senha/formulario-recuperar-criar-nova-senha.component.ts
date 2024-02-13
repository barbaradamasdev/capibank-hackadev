import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-formulario-recuperar-criar-nova-senha',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario-recuperar-criar-nova-senha.component.html',
  styleUrl: './formulario-recuperar-criar-nova-senha.component.css'
})
export class FormularioRecuperarCriarNovaSenhaComponent {
  newPassword: string = '';
  confirmPassword: string = '';
  passwordRequirements = {
    length: false,
    number: false,
    lowercase: false,
    uppercase: false
  };

  checkPasswordRequirements() {
    const numberPattern = /\d/; // Padrão para detectar números
    const lowercasePattern = /[a-z]/; // Padrão para detectar letras minúsculas
    const uppercasePattern = /[A-Z]/; // Padrão para detectar letras maiúsculas

    this.passwordRequirements.length = this.newPassword.length >= 8;
    this.passwordRequirements.number = numberPattern.test(this.newPassword);
    this.passwordRequirements.lowercase = lowercasePattern.test(this.newPassword);
    this.passwordRequirements.uppercase = uppercasePattern.test(this.newPassword);
  }

}
