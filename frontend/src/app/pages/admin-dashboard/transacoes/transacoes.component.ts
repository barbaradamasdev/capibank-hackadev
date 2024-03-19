import { Component } from '@angular/core';
import { FormChamadoComponent } from "../../../pages/area-do-cliente/chamado/form-chamado/form-chamado.component";
import { CommonModule } from '@angular/common';
import { MenuLateralAdminComponent } from "../menu-lateral-admin/menu-lateral-admin.component";
import { DashboardComponent } from "../dashboard/dashboard.component";

@Component({
    selector: 'app-transacoes',
    standalone: true,
    templateUrl: './transacoes.component.html',
    styleUrl: './transacoes.component.css',
    imports: [CommonModule]
})
export class TransacoesComponent {

}
