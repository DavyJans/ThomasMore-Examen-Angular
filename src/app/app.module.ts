import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { MenuComponent } from './menu/menu.component';
import { SecurityModule } from "./security/security.module";
import { VacancyModule } from './vacancy/vacancy.module';
import { CompanyModule } from './company/company.module';

import { AuthGuard } from './security/auth.guard';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SecurityModule,
    SharedModule,
    VacancyModule,
    CompanyModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
