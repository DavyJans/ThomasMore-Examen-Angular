import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailComponent } from './company/company-detail/company-detail.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { AuthGuard } from './security/auth.guard';
import { SecurityComponent } from './security/security/security.component';
import { VacancyDetailComponent } from './vacancy/vacancy-detail/vacancy-detail.component';
import { VacancyListComponent } from './vacancy/vacancy-list/vacancy-list.component';

const routes: Routes = [
  { path: '', component: VacancyListComponent },
  { path: 'vacancies', component: VacancyListComponent },
  { path: 'vacancies/:companyId', component: VacancyListComponent },
  { path: 'companies', component: CompanyListComponent },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard], canActivateChild: [AuthGuard] },
  { path: 'login', component: SecurityComponent },
  { path: 'register', component: SecurityComponent },
  { path: 'logout', component: SecurityComponent },
  { path: 'vacancy/:id', component: VacancyDetailComponent, canActivate: [AuthGuard] },
  { path: 'company/:id', component: CompanyDetailComponent, canActivate: [AuthGuard] }
  //   { path: 'editvacancy/:id', component: VacancyFormComponent },
  //   { path: 'editcompany/:id', component: CompanyFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
