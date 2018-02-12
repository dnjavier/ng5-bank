import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { IAccount } from '../models/account.model';

@Injectable()
export class AccountService {
    private _userId: number = 1;
    private _accountUrl: string = 'http://10.28.6.16:4000/accounts/'+ this._userId;

    constructor(private _http: HttpClient) {}

    getAccounts(): Observable<IAccount[]> {
        return this._http.get<IAccount[]>(this._accountUrl)
            .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}