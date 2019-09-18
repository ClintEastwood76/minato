import { Component, OnInit } from '@angular/core';

import { TransactionService } from '../service/transaction.service';
import { Transaction } from '../domain/transaction';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactions : Transaction[];

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.getTransactions();
  }

  getTransactions() : void {
    this.transactionService.getTransactions(JSON.parse(localStorage.getItem('currentUser')).username)
      .subscribe(transactions => this.transactions = transactions);
  }

}
