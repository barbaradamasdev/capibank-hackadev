import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-menu-lateral-admin',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu-lateral-admin.component.html',
  styleUrl: './menu-lateral-admin.component.css'
})
export class MenuLateralAdminComponent {
  @Output() linkClicado: EventEmitter<void> = new EventEmitter<void>();

  onLinkClick() {
    this.linkClicado.emit();
  }

  logout():void{
    localStorage.clear();
  }
}
