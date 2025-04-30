import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { GymService } from '../../services/gym.service';
import { GymClass } from '../../interfaces/gym-class.interface';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  classes: GymClass[] = [];

  constructor(private gymService: GymService) {}

  ngOnInit(): void {
    this.classes = this.gymService.getClasses();
  }
}
