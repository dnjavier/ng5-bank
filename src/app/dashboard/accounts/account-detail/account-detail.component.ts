import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ITransaction } from '../models/transaction.model';
import { IAccount } from '../models/account.model';
import { AccountService } from '../services/account.service';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'ds-account-list',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss']
})
export class AccountDetailComponent implements OnInit {
  errorMessage: string;
  accountId: number;
  account: IAccount;
  transactions: ITransaction[] = [
    {
      date: '9 FEB 18',
      accFrom: 1,
      accTo: 2,
      amount: 5000.00,
      description: 'GIC principal cancelled from 101213153'
    },
    {
      date: '1 FEB 18',
      accFrom: 1,
      accTo: 2,
      amount: 345.00,
      description: 'GIC principal cancelled from 101213154'
    }
  ];
  
  constructor(private _route: ActivatedRoute,
              private _accountService: AccountService){ }

  ngOnInit() {
    // get URL parameters
    this._route.params
      .flatMap(params => {
        this.accountId = +params['id']; // --> Name must match wanted parameter
        return this._accountService.getAccount(this.accountId);
      })
      .subscribe(account => {
          this.account = account;
        },
        error => this.errorMessage = <any>error);
  }
}
