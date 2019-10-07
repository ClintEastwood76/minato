import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

import { TransactionService } from './service/transaction.service';
import { RechargeService } from './service/recharge.service';
import { AuthenticationService } from './service/authentication.service';
import { LocationService } from './service/location.service';
import { ShopService } from './service/shop.service';

import { LoginComponent, ErrorCredentialsComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { RechargeComponent } from './recharge/recharge.component';

import { JwtInterceptor } from './helpers/jwt-interceptor';
import { ErrorInterceptor } from './helpers/error-interceptor';

import { appRoutingModule } from './app.routing';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';
import { GeomapComponent } from './geomap/geomap.component';

import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ErrorCredentialsComponent,
    DashboardComponent,
    MenuComponent,
    TransactionsComponent,
    RechargeComponent,
    TransactionDetailComponent,
    FooterComponent,
    GeomapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    appRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBoEg0NGE38ROKW-ogIUbyj5rZz1MFn3Yc'
    })
  ],
  entryComponents: [
    ErrorCredentialsComponent,
  ],
  providers: [TransactionService,
              RechargeService,
              ShopService,
              AuthenticationService,
              LocationService,
              GoogleMapsAPIWrapper,
              { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
          // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

             ],
  bootstrap: [AppComponent],





})
export class AppModule { }
