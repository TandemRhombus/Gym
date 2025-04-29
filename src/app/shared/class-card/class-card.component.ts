import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GymClass } from '../../interfaces/gym-class.interface';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-class-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './class-card.component.html',
  styleUrls: ['./class-card.component.scss']
})
export class ClassCardComponent {
  @Input() gymClass!: GymClass;
  @Output() enroll = new EventEmitter<number>();

  onEnroll(): void {
    this.enroll.emit(this.gymClass.id);
  }
}