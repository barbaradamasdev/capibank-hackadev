import { Component } from '@angular/core';
import { FormChamadoComponent } from "../../../pages/area-do-cliente/chamado/form-chamado/form-chamado.component";
import { CommonModule } from '@angular/common';
import { MenuLateralAdminComponent } from "../menu-lateral-admin/menu-lateral-admin.component";


@Component({
  selector: 'app-config-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './config-admin.component.html',
  styleUrl: './config-admin.component.css'
})
export class ConfigAdminComponent {
}
