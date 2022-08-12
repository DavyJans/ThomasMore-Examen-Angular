import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { SharedModule } from '../shared/shared.module';
import { CompanyService } from './company.service';
import { CompanyListComponent } from './company-list/company-list.component';


@NgModule({
  declarations: [
    CompanyComponent,
    CompanyListComponent,

  ],
  imports: [
    SharedModule
  ],
  exports: [
    CompanyComponent,
    CompanyListComponent,

  ],
  providers: [
    CompanyService
  ]
})
export class CompanyModule { }
