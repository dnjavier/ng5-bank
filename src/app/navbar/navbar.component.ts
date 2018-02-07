import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'nav-bar',
    template: ` <nav class="navbar navbar-expand-md navbar-dark bg-dark">
  <a class="navbar-brand" [routerLinkActive]="['active']" [routerLinkActiveOptions]="{exact:true}" [routerLink]="['']">KG Bank</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav ">
		<a class="nav-link" [routerLinkActive]="['active']" [routerLinkActiveOptions]="{exact:true}" [routerLink]="['']">Home</a>
		<a class="nav-link" [routerLinkActive]="['active']" [routerLinkActiveOptions]="{exact:true}" [routerLink]="['/login']">Login</a>
		<a class="nav-link" [routerLinkActive]="['active']" [routerLinkActiveOptions]="{exact:true}" [routerLink]="['/signUp']">Sign Up</a>
		<a class="nav-item nav-link disabled" href="#">Disabled</a>
    </div>
  </div>
</nav>`,
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
