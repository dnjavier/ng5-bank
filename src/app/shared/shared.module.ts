import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule }  from '@angular/platform-browser';

import { NavbarComponent } from './navbar/navbar.component';
import { ErrorComponent } from './error/error.component';
import { SharedRoutingModule } from './shared-routing.module';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  imports: [
      RouterModule,
      NgbModule,
      BrowserModule,
      SharedRoutingModule
  ],
  declarations: [
    NavbarComponent,
    ErrorComponent,
    AlertComponent
  ],
  exports: [
    NavbarComponent,
    ErrorComponent,
    AlertComponent
  ],
  providers: [
    AlertComponent
  ],
})
export class SharedModule { }
