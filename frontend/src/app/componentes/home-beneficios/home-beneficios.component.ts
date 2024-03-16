import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-beneficios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-beneficios.component.html',
  styleUrl: './home-beneficios.component.css'
})
export class HomeBeneficiosComponent {
  beneficios = [
    {
      titulo: 'Conta sem tarifa',
      imagemSrc: '../../../assets/ilustracoes/ilustracao02.png',
      descricao: 'Sem taxa de manutenção, fácil abertura de conta e menos burocracia.'
    },
    {
      titulo: 'Rendimento todo dia',
      imagemSrc: '../../../assets/ilustracoes/ilustracao03.png',
      descricao: 'Seu dinheiro rendendo todo dia com 105% do CDI, tudo com transparência.'
    },
    {
      titulo: 'Cashback',
      imagemSrc: '../../../assets/ilustracoes/ilustracao01.png',
      descricao: 'Oferecemos cashback para compras nos vários parceiros.'
    },
    {
      titulo: 'Conta empresarial',
      imagemSrc: '../../../assets/ilustracoes/ilustracao04.png',
      descricao: 'Sendo CapiBank você acessa plataformas de educação financeira para seu negócio'
    },
  ]
}
