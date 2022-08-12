
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { VacancyService } from './vacancy.service';
import { VacancyComponent } from './vacancy.component';
// import { VacancyDetailComponent } from './vacancy-detail/vacancy-detail.component';
// import { VacancyFormComponent } from './vacancy-form/vacancy-form.component';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';


@NgModule({
  declarations: [
    VacancyComponent,
    // VacancyDetailComponent,
    // VacancyFormComponent,
    VacancyListComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    VacancyComponent,
    // VacancyDetailComponent,
    VacancyListComponent

  ],
  providers: [
    VacancyService
  ]
})
export class VacancyModule { }