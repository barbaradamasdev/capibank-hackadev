import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-capivida-pilares',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './capivida-pilares.component.html',
  styleUrl: './capivida-pilares.component.css'
})
export class CapividaPilaresComponent {
  pilares = [
    {
      titulo: 'Conservação Ambiental',
      descricao: 'O Projeto CapVida visa conservar o habitat das capivaras, protegendo áreas naturais críticas e monitorando suas populações com tecnologias avançadas. Além disso, promove campanhas educativas para conscientização sobre a importância das capivaras no ecossistema e para incentivar a coexistência pacífica entre humanos e a vida selvagem.',
      imagemSrc: '../../../assets/banner/capivida.jpeg'
    },
    {
      titulo: 'Desenvolvimento Sustentável',
      descricao: 'Alcançado através do engajamento comunitário, estabelecendo parcerias para promover a coexistência harmoniosa entre humanos e capivaras, evitando conflitos e incentivando a proteção mútua. Implementamos práticas turísticas responsáveis e também são estabelecidos programas de cuidado veterinário para garantir a saúde das capivaras e prevenir doenças.',
      imagemSrc: '../../../assets/banner/capivara-imagem1.jpg'
    },
    {
      titulo: 'Governança Eficaz',
      descricao: 'Colabora com órgãos governamentais para fortalecer e implementar legislação ambiental que proteja as capivaras e seu habitat. Além disso, desenvolve planos de contingência para mitigar riscos ambientais, como desastres naturais e mudanças climáticas. Por fim, assegura a transparência nas ações do projeto e a responsabilidade na utilização dos recursos financeiros, garantindo um compromisso sólido com a sustentabilidade e a conservação da vida selvagem.',
      imagemSrc: '../../../assets/banner/capivara-imagem3.png'
    }
  ];
}
