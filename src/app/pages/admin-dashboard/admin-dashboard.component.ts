import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { InscriptionService } from '../../services/inscription.service';
import { TemplateDataService } from '../../services/template-data.service';
import { ReactiveDataService } from '../../services/reactive-data.service';
import { GymClass } from '../../interfaces/gym-class.interface';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  enrollments: GymClass[] = [];
  templateEntries: any[] = [];
  reactiveEntries: any[] = [];

  constructor(
    private inscriptionService: InscriptionService,
    private templateData: TemplateDataService,
    private reactiveData: ReactiveDataService
  ) {}

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.enrollments = this.inscriptionService.getEnrollments();
    this.templateEntries = this.templateData.getEntries();
    this.reactiveEntries = this.reactiveData.getEntries();
  }

  removeEnrollment(id: number) {
    this.inscriptionService.removeEnrollment(id);
    this.loadAll();
  }

  removeTemplate(index: number) {
    this.templateEntries.splice(index, 1);
    this.templateData.updateEntries(this.templateEntries);
    this.loadAll();
  }

  removeReactive(index: number) {
    this.reactiveEntries.splice(index, 1);
    this.reactiveData.updateEntries(this.reactiveEntries);
    this.loadAll();
  }
}
