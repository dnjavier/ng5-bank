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

    user = {};

  	userLoggedIn: boolean = false;
    loggedInUser: string;
    authUser;

    constructor( private router: Router , private http: HttpClient) {
     }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            this.user = JSON.parse(localStorage.currentUser);
            return true;
        }
        return this.verifyLogin();
    }

    verifyLogin(): boolean {
    	if (this.userLoggedIn) { 
            return true; 
        }
        this.router.navigate(['/login']);
        return false;
    }

    // register(email: string, password: string){
        
    // }

    // verifyUser(loginEmail: string, loginPassword: string) {
    //     if (loginEmail === this.user.email && loginPassword === this.user.password) {
    //         return true;
    //     }
    //     return false;
    // }

    login(loginEmail: string, loginPassword: string) {
        return this.http.post<any>(appConfig.apiUrl + '/users/authenticate', { username: loginEmail, password: loginPassword })
        .map(user => {
            // console.log(user);
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                this.userLoggedIn = true;
                this.user = user;
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.router.navigate(['']);       
    }

}
