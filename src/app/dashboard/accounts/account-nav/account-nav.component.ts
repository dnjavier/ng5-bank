import { Component, OnInit } from '@angular/core';
import { IAccount } from '../models/account.model';

@Component({
    selector: 'account-nav',
    templateUrl: './account-nav.component.html',
    styleUrls: ['./account-nav.component.scss']
})

export class AccountNavComponent implements OnInit {

  accounts: IAccount[] = [
    {
      number: 1,
      name: 'daily savings',
      user: 1,
      amount: 500.00
    },
    {
      number: 2,
      name: 'car saving',
      user: 1,
      amount: 300.00
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
