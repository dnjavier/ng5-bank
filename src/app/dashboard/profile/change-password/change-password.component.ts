import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';

import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  selector: 'change-pass',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  previousPassword: '';
  newPassword: '';
  confirmNewPassword: '';

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }

  saveChanges(form: NgForm) {
    if ((this.newPassword !== '') && (this.newPassword === this.confirmNewPassword) && (this.newPassword !== '')) {
      // console.log({previousPassword : this.previousPassword, newPassword:this.newPassword})
      this.auth.updateUser({previousPassword: this.previousPassword, newPassword: this.newPassword}).subscribe(
        data => {
            console.log(data);
        },
        error => {
            console.log('error', error);
        });
    } else {
      console.log(this.newPassword, this.confirmNewPassword);
      console.log(this.newPassword === this.confirmNewPassword);
    }
  }
}
