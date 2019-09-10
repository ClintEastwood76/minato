import { Component, OnInit } from '@angular/core';

import { TransactionService } from '../transaction.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactions : Transaction[];

  constructor(private transactionService: TransactionService,
              private sessionService: SessionService) { }

  ngOnInit() {
    this.getTransactions();
  }

  getTransactions() : void {
    this.transactionService.getTransactions(this.sessionService.user)
      .subscribe(transactions => this.transactions = transactions);
  }

}
