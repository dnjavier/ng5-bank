import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountListComponent } from './account-list/account-list.component';

const routes: Routes = [
    { 
        path: 'accounts',
        component: AccountListComponent
    },
    { 
        path: 'accounts/:id',
        component: AccountDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountsRoutingModule { }
