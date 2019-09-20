import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Transaction } from '../domain/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  items = [];

  private transactionUrl = 'http://localhost:8080/transactions';

  constructor(
    private http: HttpClient
  ) {}

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.transactionUrl);
  }

}
