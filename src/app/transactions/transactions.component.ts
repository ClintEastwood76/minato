import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../service/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactions;

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.transactions = this.transactionService.getTransactions();
  }

}
