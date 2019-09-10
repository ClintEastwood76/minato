import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

import { SessionService } from './session.service';
import { TransactionService } from './transaction.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { RechargeComponent } from './recharge/recharge.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    MenuComponent,
    TransactionsComponent,
    RechargeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent },
      { path: 'trxs', component: TransactionsComponent },
      { path: 'recharge', component: RechargeComponent }
    ])
  ],
  providers: [SessionService, TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
