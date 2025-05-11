import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // CORRECTO para standalone
import { provideAnimations } from '@angular/platform-browser/animations';

import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/pages/home/home.component';
import { ClassesComponent } from './app/pages/classes/classes.component';
import { ClassDetailComponent } from './app/pages/class-detail/class-detail.component';
import { ScheduleComponent } from './app/pages/schedule/schedule.component';
import { ContactComponent } from './app/pages/contact/contact.component';
import { LoginComponent } from './app/auth/login/login.component';
import { TemplateFormComponent } from './app/forms/template-form/template-form.component';
import { ReactiveFormComponent } from './app/forms/reactive-form/reactive-form.component';
import { AdminDashboardComponent } from './app/pages/admin-dashboard/admin-dashboard.component';
import { TeamComponent } from './app/pages/team/team.component';
import { ApiDataComponent } from './app/pages/api-data/api-data.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'classes/:id', component: ClassDetailComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'template-form', component: TemplateFormComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'team', component: TeamComponent },
  { path: 'api-data', component: ApiDataComponent },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideRouter(routes),
    provideHttpClient() 
  ]
}).catch(err => console.error(err));
