import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../../../models/user.model';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

    user: IUser;
  
    constructor(private auth: AuthenticationService){ }

    ngOnInit() {
        this.user = this.auth.user;
    }
}
