import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-depoimentos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-depoimentos.component.html',
  styleUrl: './home-depoimentos.component.css'
})
export class HomeDepoimentosComponent {
  depoimentos = [
    {
      nome: 'Antonia Silva',
      profissao: 'Empreendedora',
      imagemSrc: '../../../assets/clientes-depoimentos/cliente3.jpeg',
      descricao: 'Estou extremamente satisfeita com a experiência no Capibank. Além de oferecerem taxas competitivas, o atendimento ao cliente é excepcional. A Maquininha Capibank facilitou muito minhas transações comerciais, e a segurança dos seus sistemas me dá tranquilidade para focar no crescimento do meu negócio.'
    },
    {
      nome: 'João Pacheco',
      profissao: 'Profissional Autônomo',
      imagemSrc: '../../../assets/clientes-depoimentos/cliente1.jpeg',
      descricao: 'Encontrei no Capibank a solução perfeita para minhas necessidades financeiras. A segurança dos seus sistemas é impressionante, e a variedade de produtos e serviços me permite gerenciar minhas finanças de forma eficiente. A equipe de suporte sempre está pronta para ajudar, tornando minha experiência bancária mais tranquila e conveniente.'
    },
    {
      nome: 'Silvana Fonseca',
      profissao: 'Estudante Universitária',
      imagemSrc: '../../../assets/clientes-depoimentos/cliente2.jpeg',
      descricao: 'O Capibank superou minhas expectativas em todos os aspectos. Abrir minha conta foi rápido e fácil, e o aplicativo é incrivelmente intuitivo. Além disso, os benefícios exclusivos e programas de recompensa são um grande diferencial. Recomendo fortemente a todos os meus amigos.'
    }
  ]
}
