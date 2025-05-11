import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { GymService } from '../../services/gym.service';
import { GymClass } from '../../interfaces/gym-class.interface';
import { ClassCardComponent } from '../../shared/class-card/class-card.component';
import { InscriptionService } from '../../services/inscription.service';
import { Enrollment } from '../../interfaces/enrollment.interface';
import Swal from 'sweetalert2';

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

  async onEnroll(classId: number) {
    const gymClass = this.classes.find(c => c.id === classId);
    if (!gymClass) return;

    const { value: userName } = await Swal.fire({
      title: 'Ingresa tu nombre',
      input: 'text',
      inputLabel: 'Nombre completo',
      inputPlaceholder: 'Ej. Juan Pérez',
      showCancelButton: true,
      confirmButtonText: 'Siguiente',
      inputValidator: value => !value?.trim() ? 'El nombre es requerido' : null
    });

    if (!userName) return;

    const { value: userEmail } = await Swal.fire({
      title: 'Ingresa tu correo',
      input: 'email',
      inputLabel: 'Correo electrónico',
      inputPlaceholder: 'ejemplo@correo.com',
      showCancelButton: true,
      confirmButtonText: 'Inscribirme',
      inputValidator: value => {
        if (!value?.trim()) return 'El correo es requerido';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Correo inválido';
        return null;
      }
    });

    if (!userEmail) return;

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
