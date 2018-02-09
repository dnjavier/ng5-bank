import { NgModule } from '@angular/core';

import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountsComponent } from './accounts.component';
import { AccountNavComponent } from './account-nav/account-nav.component';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        RouterModule.forChild([])
    ],
    declarations: [
        AccountsComponent,
        AccountDetailComponent,
        AccountListComponent,
        AccountNavComponent
    ],
    providers: [
        //Services in accounts
    ]
})
export class AccountsModule { }
