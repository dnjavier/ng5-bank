import { Injectable } from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class AuthenticationService {

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
    	return true;
    }

    register(email: string, password: string){
        
    }

    verifyUser() {
        
    }

    login(loginEmail: string, loginPassword: string) {
        
    }

    logout(){
        
    }

}
