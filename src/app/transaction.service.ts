import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  items = [];

  constructor(
    private http: HttpClient
  ) {}

  getTransactions() {
    return this.http.get('/assets/transactions.json');
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

}
