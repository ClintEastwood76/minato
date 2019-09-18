import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { RechargeComponent } from './recharge/recharge.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'trxs', component: TransactionsComponent },
  { path: 'recharge', component: RechargeComponent },
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
