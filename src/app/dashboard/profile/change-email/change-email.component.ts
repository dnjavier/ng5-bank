import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';
import { IUser } from '../../../models/user.model';

@Component({
  templateUrl: './change-email.component.html',
  styleUrls: ['./change-email.component.scss']
})
export class ChangeEmailComponent implements OnInit {
  user: IUser;
  newEmailAddress: string;
  confirmEmailAddress: string;

  constructor(private auth: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    this.user = this.auth.user;
  }

  saveChanges(): void {
    if (this.newEmailAddress !== '' && this.newEmailAddress === this.confirmEmailAddress) {
      this.auth.updateUser({username: this.newEmailAddress}).subscribe(
        data => {
            if (data === 'success') {
              this.router.navigate(['main', 'profile']);
            }
        },
        error => {
            console.log('error', error);
        });
    } else {
      console.log(this.newEmailAddress, this.confirmEmailAddress);
    }
  }
}
