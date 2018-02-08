import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password1: string;
  
  constructor(private auth: AuthenticationService, private router: Router){

  }

  ngOnInit() {
  }

  login(){
    console.log(this.email, this.password1);
    this.auth.login(this.email, this.password1)
      .subscribe(
        data => {
            this.router.navigate(["/main"]);
        },
        error => {
            console.log("error",error);
        });
  }

  cancel(){
    this.router.navigate(['']);
  }

  

}
