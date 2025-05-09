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
    this.currentSlide = (this.currentSlide - 1 + this.slideCount) % this.slideCount;
    this.updateSlidePosition();
  }

  private updateSlidePosition(): void {
    const slideElement = document.querySelector('.carousel-slide') as HTMLElement;
    if (slideElement) {
      slideElement.style.transform = `translateX(-${this.currentSlide * 100}%)`;
    }
  }

  private startAutoSlide(): void {
    setInterval(() => {
      this.nextSlide();
    }, 5000); // Cambia de slide cada 5 segundos
  }




}
