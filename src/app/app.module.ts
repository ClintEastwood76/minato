import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

import { TransactionService } from './service/transaction.service';
import { RechargeService } from './service/recharge.service';
import { AuthenticationService } from './service/authentication.service';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { RechargeComponent } from './recharge/recharge.component';

import { JwtInterceptor } from './helpers/jwt-interceptor';
import { ErrorInterceptor } from './helpers/error-interceptor';

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
  providers: [TransactionService, RechargeService, AuthenticationService,
          { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
          // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

             ],
  bootstrap: [AppComponent]



})
export class AppModule { }
