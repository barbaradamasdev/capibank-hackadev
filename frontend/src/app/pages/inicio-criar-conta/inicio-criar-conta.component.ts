import { Component, OnInit } from '@angular/core';
import { CabecalhoLoginComponent } from "../../componentes/cabecalho-login/cabecalho-login.component";
import { RodapeLoginComponent } from "../../componentes/rodape-login/rodape-login.component";
import { FormularioCriarContaPgUmComponent } from './forms/formulario-criar-conta-pg-um/formulario-criar-conta-pg-um.component';
import { FormularioCriarContaPgDoisComponent } from './forms/formulario-criar-conta-pg-dois/formulario-criar-conta-pg-dois.component';
import { FormularioCriarContaPgTresComponent } from './forms/formulario-criar-conta-pg-tres/formulario-criar-conta-pg-tres.component';
import { FormularioCriarContaPgQuatroComponent } from './forms/formulario-criar-conta-pg-quatro/formulario-criar-conta-pg-quatro.component';
import { BannerComponent } from "../../componentes/banner/banner.component";
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-inicio-criar-conta',
    standalone: true,
    templateUrl: './inicio-criar-conta.component.html',
    styleUrl: './inicio-criar-conta.component.css',
    imports: [CommonModule, RouterOutlet, CabecalhoLoginComponent, RodapeLoginComponent, FormularioCriarContaPgUmComponent, FormularioCriarContaPgDoisComponent, FormularioCriarContaPgTresComponent, FormularioCriarContaPgQuatroComponent, BannerComponent]
})
export class InicioCriarContaComponent implements OnInit{
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Capibank - Crie sua conta');

    this.form = this.formBuilder.group({
      passo1: this.formBuilder.group({
        nomeCompleto: '',
        nascimento: '',
        telefone: ''
      }),
      passo2: this.formBuilder.group({
        cep: '',
        rua: '',
        numero: '',
        cidade: '',
        complemento: ''
      }),
      passo3: this.formBuilder.group({
        email: '',
        senha: '',
        confirmacaoSenha: ''
      }),
    });
  }

  getStep1Form(): FormGroup {
    return this.form.get('passo1') as FormGroup;
  }
  getStep2Form(): FormGroup {
    return this.form.get('passo2') as FormGroup;
  }
  getStep3Form(): FormGroup {
    return this.form.get('passo3') as FormGroup;
  }
}
