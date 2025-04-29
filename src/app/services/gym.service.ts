import { Injectable } from '@angular/core';
import { GymClass } from '../interfaces/gym-class.interface';

@Injectable({
  providedIn: 'root'
})
export class GymService {
  private classes: GymClass[] = [
    {
      id: 1,
      name: 'Zumba',
      description: 'Baile aeróbico con ritmo latino para ponerte en forma.',
      image: 'assets/images/classes/zumba.jpg',
      schedule: ['Lunes 8:00', 'Miércoles 18:00', 'Viernes 7:00']
    },
    {
      id: 2,
      name: 'Pilates',
      description: 'Fortalece tu core y mejora tu postura con Pilates.',
      image: 'assets/images/classes/pilates.jpg',
      schedule: ['Martes 9:00', 'Jueves 17:00']
    },
    {
      id: 3,
      name: 'CrossFit',
      description: 'Entrenamiento funcional intenso para todos los niveles.',
      image: 'assets/images/classes/crossfit.jpg',
      schedule: ['Lunes 19:00', 'Miércoles 7:00', 'Sábado 10:00']
    }
  ];

  getClasses(): GymClass[] {
    return [...this.classes];
  }

  getClassById(id: number): GymClass | undefined {
    return this.classes.find(c => c.id === id);
  }
}
