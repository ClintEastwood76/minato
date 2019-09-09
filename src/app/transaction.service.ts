import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor() { }

  getTransactions() {
    console.log('getting...');
  }
}
