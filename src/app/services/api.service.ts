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
  private url = '../../assets/api/classes.json';

  constructor(private http: HttpClient) {}

  getClasses(): Observable<ApiClass[]> {
    return this.http.get<ApiClass[]>(this.url);
  }
}
