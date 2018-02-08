import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { AccountListComponent } from './account-list/account-list.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { DashboardComponent } from './dashboard.component';
import { DsNavigationComponent } from './ds-shared/ds-navigation/ds-navigation.component';
import { MainNavigationComponent } from './ds-shared/main-navigation/main-navigation.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
    imports: [
        DashboardRoutingModule
    ],
    declarations: [
        DashboardComponent,
        AccountListComponent,
        AccountDetailComponent,
        DsNavigationComponent,
        MainNavigationComponent,
        ProfileComponent
    ],
    providers: [
        //Services in dashboard
    ]
})
export class DashboardModule { }
