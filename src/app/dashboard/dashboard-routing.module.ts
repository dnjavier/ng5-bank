import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';

const routes: Routes = [
    { 
        path: 'main', 
        component: DashboardComponent,
        children: [
            {
                path: 'accounts/:id',
                component: AccountDetailComponent
            },
            {
                path: 'accounts',
                component: AccountListComponent,
                pathMatch: 'full'
            },
            {
                path: '',
                redirectTo: '/main/accounts',
                pathMatch: 'full'
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
