import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AccountListComponent } from './account-list/account-list.component';

@NgModule({
    imports: [
        DashboardRoutingModule
    ],
    declarations: [
        AccountListComponent
    ],
    providers: [
        //Services in dashboard
    ]
})
export class DashboardModule { }
