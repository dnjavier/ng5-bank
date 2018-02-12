import { Component, OnInit } from '@angular/core';
import { IAccount } from '../models/account.model';
import { AccountService } from '../services/account.service';
import { error } from 'util';

@Component({
    selector: 'account-nav',
    templateUrl: './account-nav.component.html',
    styleUrls: ['./account-nav.component.scss']
})

export class AccountNavComponent implements OnInit {

  errorMessage: string;
  accounts: IAccount[] = [];

  constructor(private _accountService: AccountService) { }

  ngOnInit() {
    this._accountService.getAccounts()
      .subscribe(accounts => {
        this.accounts = accounts;
      },
      error => this.errorMessage = <any>error);
  }

}
