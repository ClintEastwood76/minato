﻿import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { RechargeComponent } from './recharge/recharge.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'trxs', component: TransactionsComponent },
  { path: 'trx/:id', component: TransactionDetailComponent },
  { path: 'recharge', component: RechargeComponent },
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
