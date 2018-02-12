import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ITransaction } from '../models/transaction.model';
import { IAccount } from '../models/account.model';
import { AccountService } from '../services/account.service';
import 'rxjs/add/operator/mergeMap';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'ds-account-list',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss']
})
export class AccountDetailComponent implements OnInit {
  errorMessage: string;
  accountId: number;
  account: IAccount;
  transactions: ITransaction[];
  
  constructor(private _route: ActivatedRoute,
              private _accountService: AccountService,
              private _transactionService: TransactionService){ }

  ngOnInit() {
    // get URL parameters
    this._route.params
      .flatMap(params => {
        this.accountId = +params['id']; // --> Name must match wanted parameter
        return this._accountService.getAccount(this.accountId);
      })
      .flatMap(account => {
          this.account = account;
          return this._transactionService.getTransaction(this.accountId);
      })
      .subscribe(transactions => {
        this.transactions = transactions;
      });
  }
}
