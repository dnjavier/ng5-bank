import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { NavProfileComponent } from './nav-profile/nav-profile.component';
import { ChangeEmailComponent } from './change-email/change-email.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        RouterModule.forChild([]),
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        NavProfileComponent,
        ProfileComponent,
        ChangeEmailComponent,
        ChangePasswordComponent
    ],
    providers: [
        //Services in profile
    ]
})
export class ProfileModule { }
