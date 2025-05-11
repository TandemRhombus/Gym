// src/app/pages/home/home.component.ts
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
  // overlay-gradient + url
  heroBackground = `
    linear-gradient(
      135deg,
      rgba(15, 23, 42, 0.5),
      rgba(0, 0, 0, 0.9)
    ),
    url("assets/images/hero-gym.jpg")
  `;

  features = [
    {
      name: 'Zumba',
      description:
        'Clases de baile aeróbico con ritmo latino para poner tu cuerpo en movimiento.',
      image: 'assets/images/zumba.jpg'
    },
    {
      name: 'Pilates',
      description:
        'Ejercicios de bajo impacto centrados en el fortalecimiento del core y la flexibilidad.',
      image: 'assets/images/pilates.jpg'
    },
    {
      name: 'CrossFit',
      description:
        'Entrenamiento funcional que combina pesas, cardio y agilidad.',
      image: 'assets/images/crossfit.jpg'
    }
  ];

  currentSlide = 0;
  slideCount = 4; // Número de imágenes en el carrusel

  ngOnInit(): void {
    this.startAutoSlide();
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slideCount;
    this.updateSlidePosition();
  }

  prevSlide(): void {
    this.currentSlide =
      (this.currentSlide - 1 + this.slideCount) % this.slideCount;
    this.updateSlidePosition();
  }

  private updateSlidePosition(): void {
    const slide = document.querySelector('.carousel-slide') as HTMLElement;
    if (slide) {
      slide.style.transform = `translateX(-${this.currentSlide * 100}%)`;
    }
  }

  private startAutoSlide(): void {
    setInterval(() => this.nextSlide(), 5000);
  }
}
