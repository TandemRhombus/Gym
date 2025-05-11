// src/app/components/nav/nav.component.ts

import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { MatButtonModule }      from '@angular/material/button';
import { MatIconModule }        from '@angular/material/icon';
import { CommonModule }         from '@angular/common';
import { AuthService }          from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  constructor(
    public auth: AuthService,
    private router: Router
  ) {}

  onLogout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
