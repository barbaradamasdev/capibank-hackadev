import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Endereco } from '../../../../Models/Endereco';
import { EnderecoService } from '../../../../servicos/endereco.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-formulario-criar-conta-pg-dois',
  standalone: true,
  imports: [RouterLink,FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-criar-conta-pg-dois.component.html',
  styleUrl: './formulario-criar-conta-pg-dois.component.css'
})
export class FormularioCriarContaPgDoisComponent {
  constructor(private servicoEndereco : EnderecoService){}

  cep:string ='';
  endereco!: Endereco;

  buscarEndereco(): void{
    this.servicoEndereco.buscaCep(this.cep)
    .subscribe(retorno => {this.endereco = retorno},
      (error:any)=> alert("Confira o cep digitado"))
  }
  entradaCep = new FormGroup({
    cep: new FormControl('',[Validators.required])
  })

}
