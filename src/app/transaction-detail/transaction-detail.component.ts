import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TransactionService } from '../service/transaction.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit {

  transaction;

  constructor(public dialogRef: MatDialogRef<TransactionDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    // private transactionService: TransactionService,
    // private route: ActivatedRoute,
    // private location: Location
  ) {
    
  }

  ngOnInit() {
    this.transaction = this.data;
  }

  // getTransaction(): void {
  //   // todo: usare il servic e e caricare la transazione
  //   this.transaction = this.route.snapshot.paramMap.get('id');
  // }

}
