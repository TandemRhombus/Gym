// src/app/pages/admin-dashboard/admin-dashboard.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { RouterModule }       from '@angular/router';
import { FormsModule }        from '@angular/forms';
import { MatTabsModule }      from '@angular/material/tabs';
import { MatButtonModule }    from '@angular/material/button';
import { MatIconModule }      from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule }     from '@angular/material/input';
import { MatSelectModule }    from '@angular/material/select';
import { MatRadioModule }     from '@angular/material/radio';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import { MatSnackBarModule,
         MatSnackBar }        from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';

import { InscriptionService }  from '../../services/inscription.service';
import { TemplateDataService } from '../../services/template-data.service';
import { ReactiveDataService } from '../../services/reactive-data.service';
import { Enrollment }          from '../../interfaces/enrollment.interface';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatDividerModule
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  // Listados
  enrollments: Enrollment[] = [];
  templateEntries: any[]    = [];
  reactiveEntries: any[]    = [];

  // Para edición inline de template entries
  editingTemplateIndex: number | null = null;
  editingTemplateEntry: any = {};

  // Fecha mínima para edición de fecha si aplica
  minDate: Date;

  constructor(
    private inscriptionService: InscriptionService,
    private templateData: TemplateDataService,
    private reactiveData: ReactiveDataService,
    private snackBar: MatSnackBar
  ) {
    const today = new Date();
    this.minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  }

  ngOnInit(): void {
    this.loadAll();
  }

  private loadAll(): void {
    this.enrollments     = this.inscriptionService.getEnrollments();
    this.templateEntries = this.templateData.getEntries();
    this.reactiveEntries = this.reactiveData.getEntries();
  }

  // Inscripciones
  removeEnrollment(index: number): void {
    this.inscriptionService.removeEnrollment(index);
    this.loadAll();
  }

  // Template form entries
  startEditTemplate(index: number): void {
    this.editingTemplateIndex = index;
    // Clonamos para no mutar directamente
    this.editingTemplateEntry = { ...this.templateEntries[index] };
  }

  saveEditTemplate(): void {
    if (this.editingTemplateIndex === null) return;
    this.templateEntries[this.editingTemplateIndex] = this.editingTemplateEntry;
    this.templateData.updateEntries(this.templateEntries);
    this.editingTemplateIndex = null;
    this.editingTemplateEntry = {};
    this.snackBar.open('Entrada actualizada', 'Cerrar', { duration: 3000 });
    this.loadAll();
  }

  cancelEditTemplate(): void {
    this.editingTemplateIndex = null;
    this.editingTemplateEntry = {};
  }

  removeTemplate(index: number): void {
    this.templateEntries.splice(index, 1);
    this.templateData.updateEntries(this.templateEntries);
    this.loadAll();
  }

  // Reactive form entries
  removeReactive(index: number): void {
    this.reactiveEntries.splice(index, 1);
    this.reactiveData.updateEntries(this.reactiveEntries);
    this.loadAll();
  }
}
