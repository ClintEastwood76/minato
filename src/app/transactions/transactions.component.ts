import { Component, OnInit } from '@angular/core';

import { Page } from '../domain/page';
import { PageEvent } from '@angular/material/paginator';

import { TransactionService } from '../service/transaction.service';
import { Transaction } from '../domain/transaction';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactions : Transaction[];

  page : Page;
  length = 100;
  pageIndex = 0;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10];
  pageEvent: PageEvent;

  columnsToDisplay = ['date', 'desc', 'action'];


  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.getTransactions();
  }

  getTransactions() : void {
    this.transactionService.getTransactionPage(this.pageIndex, this.pageSize)
        .subscribe(page => {
          this.page = page;
          this.length = page.totalElements;
          this.transactions = page.content;
          console.log(this.page);
        });

  }

  changePage(pageEvent) {
    this.pageIndex = pageEvent.pageIndex;
    this.pageSize = pageEvent.pageSize;
    this.getTransactions();
  }

}
