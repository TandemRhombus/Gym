import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

interface TeamMember {
  name: string;
  role: string;
  photo: string;
  social?: {
    facebook?: string;
    linkedin?: string;
    email?: string;
  };
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  team: TeamMember[] = [
    { 
      name: 'Sergio Emiliano Hernández Villalpando', 
      role: 'Frontend Developer', 
      photo: 'assets/images/emiliano.jpeg',
      social: {
        facebook: '#',
        linkedin: '#',
        email: '#'
      }
    },
    { 
      name: 'Ivan Favela Ruvalcaba', 
      role: 'Frontend Developer', 
      photo: 'assets/images/ivan.jpeg',
      social: {
        facebook: '#',
        linkedin: '#',
        email: '#'
      }
    },
    // Añade más miembros con la misma estructura
  ];
}