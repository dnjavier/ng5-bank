import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { NavProfileComponent } from './nav-profile/nav-profile.component';


@NgModule({
    imports: [
        //ProfileRoutingModule
    ],
    declarations: [
        NavProfileComponent,
        ProfileComponent
    ],
    providers: [
        //Services in profile
    ]
})
export class ProfileModule { }
