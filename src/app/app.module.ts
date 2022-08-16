import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { MenuComponent } from './menu/menu.component';
import { SecurityModule } from "./security/security.module";
import { VacancyModule } from './vacancy/vacancy.module';
import { CompanyModule } from './company/company.module';
import { environment } from '../environments/environment';
import { AuthGuard } from './security/auth.guard';
import { BrowserModule } from '@angular/platform-browser';





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
    CompanyModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
