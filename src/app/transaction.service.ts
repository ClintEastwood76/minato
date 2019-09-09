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
    //return this.http.get('/assets/transactions.json');
    return this.http.get('http://localhost:8080/transactions');
  }

}
