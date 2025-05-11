import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private admins: User[] = [
    { username: 'admin1', password: 'pass123', fullName: 'Sergio Emiliano Hernandez Villalpando' },
    { username: 'admin2', password: 'pass456', fullName: 'Ivan Favela Ruvalcaba' },
    { username: 'admin3', password: 'pass789', fullName: 'Administrador Tres' }
  ];

  login(username: string, password: string): User | null {
    const user = this.admins.find(u => u.username === username && u.password === password) || null;
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
    return user;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  getCurrentUser(): User | null {
    const json = localStorage.getItem('currentUser');
    return json ? JSON.parse(json) as User : null;
  }

  isLoggedIn(): boolean {
    return this.getCurrentUser() !== null;
  }
}
