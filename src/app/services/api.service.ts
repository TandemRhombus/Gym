// src/app/services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ApiClass {
  id: number;
  name: string;
  description: string;
  schedule: string;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  // <-- Aquí cambias la URL al endpoint que creaste en Beeceptor
  private url = 'https://gymproyect.free.beeceptor.com/todos';

  constructor(private http: HttpClient) {}

  getClasses(): Observable<ApiClass[]> {
    return this.http.get<ApiClass[]>(this.url);
  }
}
