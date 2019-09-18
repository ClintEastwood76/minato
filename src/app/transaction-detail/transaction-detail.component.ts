import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TransactionService } from '../service/transaction.service';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit {

  transaction;

  constructor(
    private transactionService: TransactionService,
    private route: ActivatedRoute,
    private location: Location) {

  }

  ngOnInit() {
    this.getTransaction()
  }

  getTransaction(): void {
    // todo: usare il servic e e caricare la transazione
    this.transaction = this.route.snapshot.paramMap.get('id');
  }

  goBack(): void {
    this.location.back();
  }
}
