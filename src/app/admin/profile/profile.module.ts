import { NgModule } from '@angular/core';
import { ProfileFormComponent } from './profile-form/profile-form.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { SecurityInterceptor } from "../../security/security.interceptor";
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileService } from './profile.service';



@NgModule({
  declarations: [

    ProfileFormComponent
  ],
  imports: [
    SharedModule,
    ProfileRoutingModule
  ],
  exports: [
    ProfileFormComponent
  ],
  providers: [
    ProfileService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true
    }
  ]
})
export class ProfileModule { }
