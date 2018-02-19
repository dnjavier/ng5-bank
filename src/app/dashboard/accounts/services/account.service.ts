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
    private _accountUrl: string = 'http://10.28.6.16:4000/accounts';

    constructor(private _http: HttpClient) {}

    getAccounts(): Observable<IAccount[]> {
        let url = this._accountUrl + '/' + this._userId;
        return this._http.get<IAccount[]>(url)
            .catch(this.handleError);
    }

    getAccount(accId: number): Observable<IAccount> {
        let url = this._accountUrl + '/account/' + accId;
        return this._http.get<IAccount[]>(url)
            .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}
