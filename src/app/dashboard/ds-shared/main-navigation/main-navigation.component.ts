import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
    selector: 'main-navigation',
    templateUrl: './main-navigation.component.html',
    styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent implements OnInit {
  user = {};
  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.user = this.auth.user;
  }

  logout() {
    // remove user from local storage to log user out
    this.auth.logout();
  }

}
