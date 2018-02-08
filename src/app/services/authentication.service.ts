import { Injectable } from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { appConfig } from '../app.config';

@Injectable()
export class AuthenticationService {

    user = {
        email:"test@test.com",
        password:"12qw12qw"
    }

  	userLoggedIn: boolean = false;
    loggedInUser: string;
    authUser;

    constructor( private router: Router , private http: HttpClient) {
     }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        return this.verifyLogin(url);
    }

    verifyLogin(url: string): boolean {
    	if (this.userLoggedIn) { 
            console.log(url , "/main/accounts")
            console.log('logged?' + this.userLoggedIn);
            //this.router.navigate([url]);
            return true; 
        }

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
        console.log(loginEmail);
        return this.http.post<any>(appConfig.apiUrl + '/users/authenticate', { username: loginEmail, password: loginPassword })
        .map(user => {
            console.log(user);
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }

            return user;
        });
    }

    logout(){
        
    }

}
