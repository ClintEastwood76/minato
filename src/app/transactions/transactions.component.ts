import { Component, OnInit } from '@angular/core';


import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  tService;

  constructor(private transactionService: TransactionService) {
    this.tService = transactionService;
  }

  ngOnInit() {

  }

  getTransactions() {
    this.transactionService.getTransactions();
  }

}
