import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { DashboardComponent } from './dashboard.component';
import { DsNavigationComponent } from './ds-shared/ds-navigation/ds-navigation.component';
import { ProfileModule } from './profile/profile.module';

@NgModule({
    imports: [
        ProfileModule,
        DashboardRoutingModule
    ],
    declarations: [
        DashboardComponent,
        AccountListComponent,
        AccountDetailComponent,
        DsNavigationComponent
    ],
    providers: [
        //Services in dashboard
    ]
})
export class DashboardModule { }
