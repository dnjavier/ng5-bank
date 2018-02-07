import { Injectable } from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class AuthenticationService {

    user = {
        email:"test@test.com",
        password:"12qw12qw"
    }

  	userLoggedIn: boolean = false;
    loggedInUser: string;
    authUser;

    constructor( private router: Router ) {
     }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        return this.verifyLogin(url);
    }

    verifyLogin(url: string): boolean {
    	if (this.userLoggedIn) { return true; }

        this.router.navigate(['/login']);
        return false;
    }

    // register(email: string, password: string){
        
    // }

    verifyUser(loginEmail: string, loginPassword: string) {
        if (loginEmail === this.user.email && loginPassword === this.user.password) {
            return true;
        }
        return false;
    }

    login(loginEmail: string, loginPassword: string) {
        this.authUser = this.verifyUser(loginEmail, loginPassword)
        
        if (this.authUser) {
            this.loggedInUser = "test@test.com";
            this.userLoggedIn = true;
            console.log("Hello "+ this.loggedInUser)
            this.router.navigate(['']);
        }
    }

    logout(){
        
    }

}
