// src/app/forms/template-form/template-form.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule }    from '@angular/material/input';
import { MatSelectModule }   from '@angular/material/select';
import { MatRadioModule }    from '@angular/material/radio';
import { MatDatepickerModule }   from '@angular/material/datepicker';
import { MatNativeDateModule }   from '@angular/material/core';
import { MatButtonModule }       from '@angular/material/button';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  programs = ['Zumba', 'Pilates', 'CrossFit'];
  membershipTypes = ['Mensual', 'Anual'];
  minDate: Date;
  entries: any[] = [];

  name = '';
  email = '';
  phone = '';
  program = '';
  membership = '';
  date: Date | null = null;

  constructor() {
    const today = new Date();
    this.minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  }

  ngOnInit() {
    const json = localStorage.getItem('templateEntries');
    this.entries = json ? JSON.parse(json) : [];
  }

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    const entry = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      program: this.program,
      membership: this.membership,
      date: this.date
    };

    this.entries.push(entry);
    localStorage.setItem('templateEntries', JSON.stringify(this.entries));

    // SweetAlert2
    Swal.fire({
      icon: 'success',
      title: '¡Registro guardado!',
      text: 'Tu inscripción se ha almacenado correctamente.'
    });

    form.resetForm({
      name: '',
      email: '',
      phone: '',
      program: '',
      membership: '',
      date: null
    });
  }
}
