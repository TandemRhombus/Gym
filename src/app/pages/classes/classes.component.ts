import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { GymService } from '../../services/gym.service';
import { GymClass } from '../../interfaces/gym-class.interface';
import { ClassCardComponent } from '../../shared/class-card/class-card.component';

@Component({
  selector: 'app-classes',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatGridListModule,
    MatDividerModule,
    ClassCardComponent
  ],
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
  classes: GymClass[] = [];

  constructor(private gymService: GymService) {}

  ngOnInit() {
    this.classes = this.gymService.getClasses();
  }

  onEnroll(classId: number) {
    // Aquí podrías navegar o mostrar notificación de inscripción
    console.log('Inscribido en clase', classId);
  }
}
