import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';
import { IUser } from '../../../models/user.model';

@Component({
  selector: 'change-email',
  templateUrl: './change-email.component.html',
  styleUrls: ['./change-email.component.scss']
})
export class ChangeEmailComponent implements OnInit {
  user: IUser;
  newEmailAddress: string;
  confirmedEmailAddress: string;
  
  constructor(private auth: AuthenticationService){ }

  ngOnInit() {
    this.user = this.auth.user;
  }

  saveChanges(): void {

  }
}
