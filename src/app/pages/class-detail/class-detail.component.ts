import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { GymService } from '../../services/gym.service';
import { GymClass } from '../../interfaces/gym-class.interface';

@Component({
  selector: 'app-class-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule
  ],
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.scss']
})
export class ClassDetailComponent implements OnInit {
  gymClass?: GymClass;

  constructor(
    private route: ActivatedRoute,
    private gymService: GymService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? +idParam : null;
    if (id !== null) {
      this.gymClass = this.gymService.getClassById(id);
    }
  }

  onEnroll(): void {
    if (this.gymClass) {
      console.log(`Inscrito en la clase ${this.gymClass.id}`);
      // Aquí podrías mostrar un alert personalizado o navegar
    }
  }
}
