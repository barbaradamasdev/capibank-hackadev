import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-entrar',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario-entrar.component.html',
  styleUrl: './formulario-entrar.component.css'
})
export class FormularioEntrarComponent {

  formLogin = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    senha: new FormControl('',[Validators.required])
  });

  autenticar():void{
    if(this.formLogin.valid){
      alert("logando...")
    }
    this.formLogin.reset();
  }




}
