import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-equipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equipe.component.html',
  styleUrl: './equipe.component.css'
})
export class EquipeComponent {
  teamMembers: TeamMember[] = [
    {
      name: 'Bárbara Damasceno',
      role: 'Monitora / Product Owner / Desenvolvedora FullStack',
      github: 'https://github.com/barbaradamasdev',
      linkedin: 'https://www.linkedin.com/in/barbaradamas/',
      image: 'https://avatars.githubusercontent.com/u/115722516?v=4'
    },
    {
      name: 'Jackson Moraes',
      role: 'Desenvolvedor FullStack',
      github: 'https://github.com/jacksontadeu',
      linkedin: 'https://www.linkedin.com/in/jacksontadeu/',
      image: 'https://avatars.githubusercontent.com/u/112899379?v=4'
    },
    {
      name: 'Reginaldo Simões',
      role: 'Desenvolvedor FullStack',
      github: 'https://github.com/regis-jr',
      linkedin: 'https://www.linkedin.com/in/reginaldo-medeiros-b35283192/',
      image: 'https://avatars.githubusercontent.com/u/147585926?v=4'
    },
    {
      name: 'Silvana Santos',
      role: 'Desenvolvedora FullStack / Segurança',
      github: 'https://github.com/Silvana23',
      linkedin: 'https://www.linkedin.com/in/sisisantosdev/',
      image: 'https://github.com/barbaradamasdev/capibank-hackadev/blob/main/Documenta%C3%A7%C3%A3o/imagens/equipe/equipe-silvana.jpg?raw=true'
    },
    {
      name: 'Tatiane Tinoco',
      role: 'Desenvolvedora FullStack',
      github: 'https://github.com/tatianetinoco',
      linkedin: 'https://www.linkedin.com/in/tatianetinoco/',
      image: 'https://avatars.githubusercontent.com/u/120054718?v=4'
    },
    {
      name: 'Alisson Meireles',
      role: 'Desenvolvedor FullStack / Banco de dados',
      github: 'https://github.com/p0llus',
      linkedin: 'https://www.linkedin.com/in/Pollus',
      image: 'https://media.licdn.com/dms/image/C4E03AQHNja9VTWKrGw/profile-displayphoto-shrink_800_800/0/1516991103066?e=1712188800&v=beta&t=vU07l5bhz2amSYxCo4jX67pvtD39gSw5bcXHZ25a9bU'
    },
    {
      name: 'Ana Julia Medeiros',
      role: 'Desenvolvedora FullStack',
      github: 'https://github.com/anajuliamedeirosfaustino',
      linkedin: 'https://www.linkedin.com/in/ana-j%C3%BAlia-medeiros-faustino-50389b226/',
      image: 'https://avatars.githubusercontent.com/u/117586828?v=4'
    },
    {
      name: 'Marcela Machado',
      role: 'Desenvolvedora FullStack',
      github: 'https://github.com/MarcelaAx',
      linkedin: 'https://www.linkedin.com/in/marcela-machado1/',
      image: 'https://avatars.githubusercontent.com/u/107064504?v=4'
    },
  ];
}

interface TeamMember {
  name: string;
  role?: string;
  github: string;
  linkedin?: string;
  image: string;
}
