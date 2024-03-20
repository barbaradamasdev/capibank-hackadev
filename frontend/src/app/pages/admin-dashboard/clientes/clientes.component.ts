import { Component } from '@angular/core';
import { FormChamadoComponent } from "../../../pages/area-do-cliente/chamado/form-chamado/form-chamado.component";
import { CommonModule } from '@angular/common';
import { MenuLateralAdminComponent } from "../menu-lateral-admin/menu-lateral-admin.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { CLIENTES } from '../../../Data/Dados-clientes';
import { Cliente } from '../../../Models/Cliente';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-clientes',
    standalone: true,
    templateUrl: './clientes.component.html',
    styleUrl: './clientes.component.css',
    imports: [FormsModule, CommonModule, FormChamadoComponent, MenuLateralAdminComponent, DashboardComponent]
})
export class ClientesComponent {

  filtro: string = '';
  filtroTipo: string = 'nome';
  clienteSelecionado: Cliente | null = null;

  clientes: Cliente[] = CLIENTES;

  pesquisar() {
    console.log('Filtrar por:', this.filtroTipo, 'com filtro:', this.filtro);
  }

  selecionarCliente(cliente: Cliente) {
    this.clienteSelecionado = cliente;
  }

  bloquearDesbloquearConta() {
    // Lógica para bloquear ou desbloquear conta do cliente selecionado
    if (this.clienteSelecionado) {
      console.log('Bloquear/desbloquear conta do cliente:', this.clienteSelecionado.nome);
    }
  }
}
