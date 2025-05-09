import { Injectable } from '@angular/core';
import { GymClass } from '../interfaces/gym-class.interface';

@Injectable({ providedIn: 'root' })
export class InscriptionService {
  private key = 'enrollments';

  getEnrollments(): GymClass[] {
    const json = localStorage.getItem(this.key);
    return json ? JSON.parse(json) as GymClass[] : [];
  }

  addEnrollment(gymClass: GymClass): void {
    const list = this.getEnrollments();
    if (!list.find(e => e.id === gymClass.id)) {
      list.push(gymClass);
      localStorage.setItem(this.key, JSON.stringify(list));
    }
  }

  removeEnrollment(id: number): void {
    const updated = this.getEnrollments().filter(e => e.id !== id);
    localStorage.setItem(this.key, JSON.stringify(updated));
  }
}
