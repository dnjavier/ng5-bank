import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITransaction } from '../models/transaction.model';

@Component({
  selector: 'ds-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {

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
    },
    {
      date: '31 JAN 18',
      accFrom: 2,
      accTo: 1,
      amount: 97.05,
      description: 'Interest received'
    },
    {
      date: '5 JAN 18',
      accFrom: 1,
      accTo: 2,
      amount: 150.00,
      description: 'GIC purchase to 101213153'
    },
    {
      date: '17 DIC 17',
      accFrom: 2,
      accTo: 1,
      amount: 100.00,
      description: 'GIC principal cancelled from 101213153'
    }
  ];
  
  constructor(){ }

  ngOnInit() {
  }
}
