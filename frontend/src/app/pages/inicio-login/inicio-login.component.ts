import { Component } from '@angular/core';
import { CabecalhoLoginComponent } from "../../componentes/cabecalho-login/cabecalho-login.component";
import { RodapeLoginComponent } from "../../componentes/rodape-login/rodape-login.component";
import { FormularioEntrarComponent } from "./forms/formulario-entrar/formulario-entrar.component";
import { Titular } from '../../Models/Titular';
import { BannerComponent } from "../../componentes/banner/banner.component";
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ApiService } from '../../../app/Services/api.service';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-inicio-login',
    standalone: true,
    templateUrl: './inicio-login.component.html',
    styleUrls: ['./inicio-login.component.css'],
    imports: [CabecalhoLoginComponent, RodapeLoginComponent, FormularioEntrarComponent, BannerComponent, CommonModule, RouterOutlet]
})
export class InicioLoginComponent {
    cpf: string = '';
    senha: string = '';
    mensagemErro: string = '';

    constructor(private apiService: ApiService, private titleService: Title){ }

    realizarLogin(){
        //Verificar se campos CPF e senha foram preenchidos
        if(!this.cpf || !this.senha){
            this.mensagemErro = 'Por favor, preencha todos os campos.';
            return;
        }

        //Serviço para realizar o login
        // this.apiService.GetLogin(this.cpf, this.senha).subscribe(
        //     (response: Titular) => {
        //         localStorage.setItem('token', response.token);
        //     },
        //     (error: any) => {
        //         console.error('Erro ao fazer login: ', error);
        //         if (error.status === 404) {
        //             this.mensagemErro = 'Usuário não encontrado. Por favor, verifique suas credenciais.';
        //           } else if (error.status === 401) {
        //             this.mensagemErro = 'Credenciais inválidas. Por favor, verifique seu CPF e senha.';
        //           } else {
        //             this.mensagemErro = 'Ocorreu um erro ao fazer login. Por favor, tente novamente mais tarde.';
        //           }

        //     }
        // )
    }

  ngOnInit(): void {
    this.titleService.setTitle('Capibank - Login');
  }
}
