import { NgModule } from '@angular/core';
import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountListComponent } from './account-list/account-list.component';


@NgModule({
    imports: [
        //AccountsRoutingModule
    ],
    declarations: [
        AccountDetailComponent,
        AccountListComponent
    ],
    providers: [
        //Services in accounts
    ]
})
export class AccountsModule { }
