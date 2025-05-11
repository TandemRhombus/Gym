import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule }          from '@angular/common';
import { FormsModule }           from '@angular/forms';
import { MatFormFieldModule }    from '@angular/material/form-field';
import { MatInputModule }        from '@angular/material/input';
import { MatIconModule }         from '@angular/material/icon';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  template: `
    <mat-form-field appearance="outline" class="search-field">
      <mat-label>Buscar clase</mat-label>
      <input matInput [(ngModel)]="term" (ngModelChange)="search.emit(term)" placeholder="Escribe para filtrar..." />
      <mat-icon matSuffix>search</mat-icon>
    </mat-form-field>
  `,
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  term = '';
  @Output() search = new EventEmitter<string>();
}
