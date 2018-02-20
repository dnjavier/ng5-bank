import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {AlertComponent} from '../shared/alert/alert.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  alertMessage: any = {message:"", type:""};
  emailInput: string;
  passwordInput: string;

  constructor(private auth: AuthenticationService,
              private router: Router,
              public alert: AlertComponent) {

  }

  ngOnInit() {
  }

  login() {

    this.auth.login(this.emailInput, this.passwordInput)
      .subscribe(
        data => {
            this.router.navigate(['/main']);           
        },
        error => {
            
            if (error.error == "Username or password is incorrect") {
              this.alertMessage = {
                message: "Username or password is incorrect",
                type: "danger",
              }
            }
        });
  }

  cancel() {
    this.router.navigate(['']);
  }
}
