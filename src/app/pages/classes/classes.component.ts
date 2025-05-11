// src/app/pages/classes/classes.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule }        from '@angular/common';
import { RouterModule }        from '@angular/router';
import { MatDividerModule }    from '@angular/material/divider';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { GymService }          from '../../services/gym.service';
import { GymClass }            from '../../interfaces/gym-class.interface';
import { ClassCardComponent }  from '../../shared/class-card/class-card.component';
import { InscriptionService }  from '../../services/inscription.service';
import { Enrollment }          from '../../interfaces/enrollment.interface';

@Component({
  selector: 'app-classes',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatDividerModule,
    ClassCardComponent,
    MatSnackBarModule
  ],
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
  classes: GymClass[] = [];

  constructor(
    private gymService: GymService,
    private inscriptionService: InscriptionService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.classes = this.gymService.getClasses();
  }

  onEnroll(classId: number) {
    const gymClass = this.classes.find(c => c.id === classId);
    if (!gymClass) return;

    const userName = prompt('Ingresa tu nombre completo');
    if (!userName?.trim()) return;

    const userEmail = prompt('Ingresa tu correo electrónico');
    if (!userEmail?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
      alert('Email inválido');
      return;
    }

    const entry: Enrollment = {
      id: gymClass.id,
      className: gymClass.name,
      userName: userName.trim(),
      userEmail: userEmail.trim(),
      date: new Date().toISOString()
    };

    this.inscriptionService.addEnrollment(entry);
    this.snackBar.open(
      `¡${entry.userName} inscrito en ${entry.className}!`,
      'Cerrar',
      { duration: 3000 }
    );
  }
}
