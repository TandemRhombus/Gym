import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

interface TeamMember {
  name: string;
  role: string;
  photo: string; // ruta en assets/images/team/...
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  team: TeamMember[] = [
    { name: 'María Pérez',   role: 'Frontend Developer',  photo: 'assets/images/team/maria.jpg'   },
    { name: 'Juan Gómez',    role: 'UI/UX Designer',       photo: 'assets/images/team/juan.jpg'    },
    { name: 'Ana Rodríguez', role: 'QA & Testing',         photo: 'assets/images/team/ana.jpg'     },
    // … añade los demás integrantes …
  ];
}
