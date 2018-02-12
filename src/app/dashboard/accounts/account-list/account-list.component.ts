import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITransaction } from '../models/transaction.model';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'ds-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {
  errorMessage: any;
  transactions: ITransaction[] = [];
  
  constructor(private _transactionService: TransactionService){ }

  ngOnInit() {
    this._transactionService.getTransactions()
      .subscribe(transactions => {
        this.transactions = transactions;
      },
      error => this.errorMessage = <any>error);
  }
}
