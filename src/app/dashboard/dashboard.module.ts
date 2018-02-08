import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';

@NgModule({
    imports: [
        DashboardRoutingModule
    ],
    declarations: [
        AccountListComponent,
        AccountDetailComponent
    ],
    providers: [
        //Services in dashboard
    ]
})
export class DashboardModule { }
