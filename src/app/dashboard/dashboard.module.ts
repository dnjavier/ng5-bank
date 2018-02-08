import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { MainNavigationComponent } from './ds-shared/main-navigation/main-navigation.component';
import { ProfileModule } from './profile/profile.module';
import { AccountsModule } from './accounts/accounts.module';

@NgModule({
    imports: [
        AccountsModule,
        ProfileModule,
        DashboardRoutingModule
    ],
    declarations: [
        DashboardComponent,
        MainNavigationComponent
    ],
    providers: [
        //Services in dashboard
    ]
})
export class DashboardModule { }
