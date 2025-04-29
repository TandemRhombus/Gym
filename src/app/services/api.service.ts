import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Ajusta esta URL en environment.ts si lo usas con un backend real
  private readonly baseUrl = 'https://api.example.com';

  constructor(private http: HttpClient) {}

  // Ejemplo: obtener datos genéricos desde un endpoint
  fetch<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`);
  }
}
