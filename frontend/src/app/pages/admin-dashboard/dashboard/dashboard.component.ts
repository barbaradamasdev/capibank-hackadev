import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  saldoTotal: number = 10000;
  dinheiroEmCaixa: number = 5000;
  totalContas: number = 150;
  contasAtivas: number = 120;
  contasInativas: number = 30;
  totalClientes: number = 80;
  clientesAtivos: number = 60;
  clientesInativos: number = 20;


  dados: { tipo: string, quantidade: number }[] = [
    { tipo: 'Corrente', quantidade: 100 },
    { tipo: 'Poupança', quantidade: 80 },
    { tipo: 'Empresarial', quantidade: 20 }
  ];

  svgWidth = 320;
  svgHeight = 200;
  barPadding = 10;
  barWidth = (this.svgWidth / this.dados.length) - this.barPadding;
}
