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
  
  constructor(private userSVC: AuthenticationService, private router: Router){}

  ngOnInit() {
  }

  login(){
    this.userSVC.login(this.email, this.password1);
    this.userSVC.verifyUser();
  }

  cancel(){
    this.router.navigate(['']);
  }

  

}
