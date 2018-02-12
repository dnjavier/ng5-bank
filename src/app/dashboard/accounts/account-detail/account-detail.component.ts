import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITransaction } from '../models/transaction.model';
import { IAccount } from '../models/account.model';

@Component({
  selector: 'ds-account-list',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss']
})
export class AccountDetailComponent implements OnInit {
  
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

  account: IAccount = {
    name: 'Daily savings',
    number: 1,
    user: 1,
    amount: 500
  };
  
  constructor(){ }

  ngOnInit() {
  }
}
