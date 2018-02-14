import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorComponent } from './error/error.component';
import { RouterModule } from '@angular/router';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  imports: [
    RouterModule,
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
