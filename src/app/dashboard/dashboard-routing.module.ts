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
import { ChangeEmailComponent } from './profile/change-email/change-email.component';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';
import { AccountsComponent } from './accounts/accounts.component';
import { OverviewComponent } from './profile/overview/overview.component';

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
                component: ProfileComponent,
                children: [
                    {
                        path: '',
                        component: OverviewComponent
                    },
                    {
                        path: 'ChangeEmail',
                        component: ChangeEmailComponent
                    },
                    {
                        path: 'ChangePassword',
                        component: ChangePasswordComponent
                    }
                ]
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
