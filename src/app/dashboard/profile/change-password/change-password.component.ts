import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';

import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  previousPassword: '';
  newPassword: '';
  confirmNewPassword: '';

<<<<<<< HEAD
  constructor(private auth: AuthenticationService, private router: Router) { }
=======
  constructor(private auth: AuthenticationService,
              private router: Router) { }
>>>>>>> 23c7ea59efb93e4e7817b4a4e7c2249e86ea6ce8

  ngOnInit() {
  }

  saveChanges(form: NgForm) {
    if (this.newPassword !== '' && this.newPassword === this.confirmNewPassword) {
      this.auth.updateUser({previousPassword: this.previousPassword, newPassword: this.newPassword}).subscribe(
        data => {
<<<<<<< HEAD
            console.log(data);
            this.router.navigate(['main/profile']);
=======
          if (data === 'success') {
            this.router.navigate(['main', 'profile']);
          }
>>>>>>> 23c7ea59efb93e4e7817b4a4e7c2249e86ea6ce8
        },
        error => {
            console.log('error', error);
        });
    } else {
      console.log(this.newPassword, this.confirmNewPassword);
    }
  }
}
