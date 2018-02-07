import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [{ path: '', component: HomeComponent },
            { path: 'signUp', component: SignUpComponent },
            { path: 'login', component: LoginComponent },
            { path: '**' , component: ErrorComponent }
            ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
