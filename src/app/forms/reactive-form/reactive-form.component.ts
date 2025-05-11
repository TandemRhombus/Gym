import { Component, OnInit } from '@angular/core';
import { CommonModule }   from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl
} from '@angular/forms';
import { MatFormFieldModule }    from '@angular/material/form-field';
import { MatInputModule }        from '@angular/material/input';
import { MatSelectModule }       from '@angular/material/select';
import { MatRadioModule }        from '@angular/material/radio';
import { MatDatepickerModule }   from '@angular/material/datepicker';
import { MatNativeDateModule }   from '@angular/material/core';
import { MatButtonModule }       from '@angular/material/button';
import { MatSnackBarModule,
         MatSnackBar }          from '@angular/material/snack-bar';
import { ReactiveDataService }   from '../../services/reactive-data.service';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  form!: FormGroup;
  subjects = ['Información general', 'Inscripción', 'Queja', 'Sugerencia'];
  referrals = ['Amigos', 'Redes sociales', 'Publicidad', 'Otro'];
  minDate: Date;
  entries: any[] = [];

  constructor(
    private snackBar: MatSnackBar,
    private reactiveData: ReactiveDataService
  ) {
    const today = new Date();
    this.minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  }

  ngOnInit() {
    this.entries = this.reactiveData.getEntries();
    this.form = new FormGroup({
      name:     new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]),
      email:    new FormControl('', [Validators.required, Validators.email]),
      subject:  new FormControl('', [Validators.required]),
      referral: new FormControl('', [Validators.required]),
      date:     new FormControl(null, [Validators.required, this.dateNotPastValidator()])
    });
  }

  dateNotPastValidator(): ValidatorFn {
    return (control: AbstractControl) => {
      const val: Date = control.value;
      if (!val) return null;
      const today = new Date(); today.setHours(0,0,0,0);
      return val < today ? { pastDate: true } : null;
    };
  }

  submit() {
    if (this.form.invalid) return;
    this.entries.push(this.form.value);
    this.reactiveData.updateEntries(this.entries);
    this.snackBar.open('Solicitud de contacto enviada', 'Cerrar', { duration: 3000 });
    this.form.reset();
    this.form.get('date')?.setValue(null);
  }
}
