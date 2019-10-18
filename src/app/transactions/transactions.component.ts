import { Component, OnInit, Inject, AfterViewInit, ViewChild  } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Page } from '../domain/page';
import { PageEvent } from '@angular/material/paginator';

import { TransactionService } from '../service/transaction.service';
import { Transaction } from '../domain/transaction';

import { TransactionDetailComponent } from '../transaction-detail/transaction-detail.component';

import { AgmMap } from '@agm/core';

export interface DialogData {
  element;
}

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


  constructor(private transactionService: TransactionService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.getTransactions();
  }

  getTransactions() : void {
    this.transactionService.getTransactionPage(this.pageIndex, this.pageSize)
        .subscribe(page => {
          this.page = page;
          this.length = page.totalElements;
          this.transactions = page.content;
        });

  }

  changePage(pageEvent) {
    this.pageIndex = pageEvent.pageIndex;
    this.pageSize = pageEvent.pageSize;
    this.getTransactions();
  }

  openDetails(element): void {
    console.log('e mo so cazzi!');

    const dialogRef = this.dialog.open(TransactionDetailComponent, {
      width: '350px',
      data: Object.assign({}, element)
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
