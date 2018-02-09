import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AuthenticationService } from '../services/authentication.service';
import { ProfileComponent } from './profile/profile.component';
import { ErrorComponent } from '../shared/error/error.component';
import { ProfileModule } from './profile/profile.module';
import { AccountsModule } from './accounts/accounts.module';
import { AccountListComponent } from './accounts/account-list/account-list.component';
import { AccountDetailComponent } from './accounts/account-detail/account-detail.component';
import { AccountsComponent } from './accounts/accounts.component';

const routes: Routes = [
    { 
        path: 'main',
        canActivate: [AuthenticationService],
        component: DashboardComponent,
        children: [
            {
                path: 'accounts',
                component: AccountsComponent,
                children: [
                    {
                        path: '',
                        component: AccountListComponent
                    },
                    {
                        path: ':id',
                        component: AccountDetailComponent
                    }
                ]
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: '',
                redirectTo: '/main/accounts',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
