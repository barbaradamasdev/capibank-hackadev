import { Component, Input } from '@angular/core';
import { MenuService } from '../../servicos/menu.service'
import { RouterLink } from '@angular/router';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-cabecalho-area-interna',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cabecalho-area-interna.component.html',
  styleUrl: './cabecalho-area-interna.component.css'
})
export class CabecalhoAreaInternaComponent {
  @Input() logoSrc: string | undefined;
  elementRef: any;
  constructor(private menuService: MenuService, private apiService: ApiService) {}

  logout():void{
    this.apiService.idTitularLogado = null;
  }

  toggleMenu() {
    this.menuService.toggleMenu();
  }

}
