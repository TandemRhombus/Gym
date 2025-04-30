import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { VideoPlayerComponent } from '../../shared/video-player/video-player.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    VideoPlayerComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  features = [
    {
      name: 'Zumba',
      description: 'Clases de baile aeróbico con ritmo latino para poner tu cuerpo en movimiento.',
      image: '/assets/images/zumba.jpg'
    },
    {
      name: 'Pilates',
      description: 'Ejercicios de bajo impacto centrados en el fortalecimiento del core y la flexibilidad.',
      image: '/assets/images/pilates.jpg'
    },
    {
      name: 'CrossFit',
      description: 'Entrenamiento funcional que combina pesas, cardio y agilidad.',
      image: '/assets/images/crossfit.jpg'
    }
  ];
}
