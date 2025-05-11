import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ApiClass } from '../../services/api.service';

@Component({
  selector: 'app-api-list',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    @if (items.length > 0) {
      <div class="cards">
        @for (item of items; track item.id) {
          <mat-card class="api-card">
            <mat-card-title>{{ item.name }}</mat-card-title>
            <mat-card-content>
              <p>{{ item.description }}</p>
              <p><strong>Horario:</strong> {{ item.schedule }}</p>
            </mat-card-content>
          </mat-card>
        }
      </div>
    } @else {
      <p class="empty">No se encontraron resultados.</p>
    }
  `,
  styleUrls: ['./api-list.component.scss']
})
export class ApiListComponent {
  @Input() items: ApiClass[] = [];
}
