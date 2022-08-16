import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { CompanyComponent } from './company.component';
import { SharedModule } from '../shared/shared.module';
import { CompanyService } from './company.service';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';


@NgModule({
  declarations: [
    CompanyComponent,
    CompanyListComponent,
    CompanyDetailComponent,

  ],
  imports: [
    SharedModule,
    FormsModule
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
