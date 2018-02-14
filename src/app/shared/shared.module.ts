import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './navbar/navbar.component';
import { ErrorComponent } from './error/error.component';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  imports: [
      RouterModule,
      NgbModule,
      SharedRoutingModule
  ],
  declarations: [
    NavbarComponent,
    ErrorComponent
  ],
  exports: [    
    NavbarComponent,
    ErrorComponent
  ]
})
export class SharedModule { }
