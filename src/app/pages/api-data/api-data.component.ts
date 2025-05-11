// src/app/pages/api-data/api-data.component.ts
import { Component, OnInit }        from '@angular/core';
import { CommonModule }             from '@angular/common';
import { HttpClientModule }         from '@angular/common/http';
import { ApiService, ApiClass }     from '../../services/api.service';
import { ApiListComponent }         from '../../shared/api-list/api-list.component';
import { SearchComponent }          from '../../shared/search/search.component';

@Component({
  selector: 'app-api-data',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,   // necesario para HttpClient
    ApiListComponent,
    SearchComponent
  ],
  template: `
    <section class="api-container">
      <h1>Conoce nuestras clases</h1>
      <app-search (search)="onSearch($event)"></app-search>
      <app-api-list [items]="filtered"></app-api-list>
    </section>
  `,
  styleUrls: ['./api-data.component.scss']
})
export class ApiDataComponent implements OnInit {
  all: ApiClass[] = [];
  filtered: ApiClass[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getClasses().subscribe(data => {
      this.all = data;
      this.filtered = data;
    });
  }

  onSearch(term: string): void {
    const t = term.trim().toLowerCase();
    this.filtered = t
      ? this.all.filter(c => c.name.toLowerCase().includes(t))
      : this.all;
  }
}
