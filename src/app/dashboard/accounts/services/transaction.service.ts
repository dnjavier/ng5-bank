import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { ITransaction } from '../models/transaction.model';

@Injectable()
export class TransactionService {
    private _transactionUrl: string = 'http://10.28.6.16:4000/transactions';

    constructor(private _http: HttpClient) {}

    getTransactions(): Observable<ITransaction[]> {
        return this._http.get<ITransaction[]>(this._transactionUrl)
            .catch(this.handleError);
    }

    getTransaction(accId: number): Observable<ITransaction[]> {
        let url = this._transactionUrl + '/transaction/' + accId;
        return this._http.get<ITransaction[]>(url)
            .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}