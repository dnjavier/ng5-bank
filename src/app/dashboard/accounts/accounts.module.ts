import { NgModule } from '@angular/core';

import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountsComponent } from './accounts.component';
import { AccountNavComponent } from './account-nav/account-nav.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AccountService } from './services/account.service';
import { TransactionService } from './services/transaction.service';


@NgModule({
    imports: [
        RouterModule.forChild([]),
        BrowserModule
    ],
    declarations: [
        AccountsComponent,
        AccountDetailComponent,
        AccountListComponent,
        AccountNavComponent
    ],
    providers: [
        AccountService,
        TransactionService
    ]
})
export class AccountsModule { }
