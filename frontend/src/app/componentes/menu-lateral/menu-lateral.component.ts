import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.css'
})
export class MenuLateralComponent {
  @Output() linkClicado: EventEmitter<void> = new EventEmitter<void>();

  onLinkClick() {
    this.linkClicado.emit();
  }

  constructor(
    private apiService: ApiService,
  ) {}

  logout():void{
    this.apiService.logout();
  }
}
