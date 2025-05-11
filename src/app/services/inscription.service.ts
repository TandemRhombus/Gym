// src/app/services/inscription.service.ts
import { Injectable } from '@angular/core';
import { Enrollment } from '../interfaces/enrollment.interface';

@Injectable({ providedIn: 'root' })
export class InscriptionService {
  private key = 'enrollments';

  getEnrollments(): Enrollment[] {
    const json = localStorage.getItem(this.key);
    return json ? JSON.parse(json) : [];
  }

  addEnrollment(entry: Enrollment): void {
    const list = this.getEnrollments();
    if (!list.find(e => e.id === entry.id && e.userEmail === entry.userEmail)) {
      list.push(entry);
      localStorage.setItem(this.key, JSON.stringify(list));
    }
  }

  removeEnrollment(index: number): void {
    const list = this.getEnrollments();
    list.splice(index, 1);
    localStorage.setItem(this.key, JSON.stringify(list));
  }
}
