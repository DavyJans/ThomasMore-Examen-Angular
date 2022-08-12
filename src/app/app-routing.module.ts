import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SecurityComponent } from './security/security/security.component';
import { VacancyComponent } from './vacancy/vacancy.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'vacancies', component: VacancyComponent },
  { path: 'login', component: SecurityComponent },
  { path: 'register', component: SecurityComponent },
  { path: 'logout', component: SecurityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
