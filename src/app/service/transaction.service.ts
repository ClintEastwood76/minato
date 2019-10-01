import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { PageEvent } from '@angular/material/paginator';

import { Transaction } from '../domain/transaction';
import { Page } from '../domain/page';

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

  getTransactionPage(pageNum, pageSize): Observable<Page> {

    let params = new HttpParams();
    params = params.append('pagenum', pageNum);
    params = params.append('pagesize', pageSize);

    return this.http.get<Page>(this.transactionUrl, {params});
  }

}
