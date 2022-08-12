import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { SharedModule } from '../shared/shared.module';
import { CompanyService } from './company.service';



@NgModule({
  declarations: [
    CompanyComponent,
    // VacancyDetailComponent,
    // VacancyFormComponent,
    // VacancyListComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    CompanyComponent,
    // VacancyDetailComponent,

  ],
  providers: [
    CompanyService
  ]
})
export class CompanyModule { }
