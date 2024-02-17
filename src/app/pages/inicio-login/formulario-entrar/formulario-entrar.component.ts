import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Cliente } from '../../../Models/Cliente';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario-entrar',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './formulario-entrar.component.html',
  styleUrl: './formulario-entrar.component.css'
})
export class FormularioEntrarComponent {

  constructor(private rota: Router){}

  formLogin = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    senha: new FormControl('',[Validators.required])
  });
  user: Cliente = {
    email: 'sharp@gmail.com',
    senha:'admin123',
    nome: 'Antonio Trooper'
  }
  autenticar():void{
    if(this.formLogin.value.email == this.user.email && this.formLogin.value.senha == this.user.senha){
      localStorage.setItem('email', this.formLogin.value.email)
      localStorage.setItem('senha', this.formLogin.value.senha)
      localStorage.setItem('nome', this.user.nome)
      this.rota.navigateByUrl('/cliente')
    }else{

      // TODO Estilizar com bootstrap modal de erro
      alert("Login falhou, senha ou usuário invalidos!!!")
    }
    this.formLogin.reset();
  }
}
