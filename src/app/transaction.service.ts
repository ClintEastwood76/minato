import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  items = [];

  private transactionUrl = 'http://localhost:8080/transactions?owner=';

  constructor(
    private http: HttpClient
  ) {}

  getTransactions(user): Observable<Transaction[]> {
    console.log(user);
    return this.http.get<Transaction[]>(this.transactionUrl + user);
  }

}
