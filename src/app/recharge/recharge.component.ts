import { Component, OnInit } from '@angular/core';

import {PageEvent} from '@angular/material/paginator';

import { RechargeService } from '../service/recharge.service';
import { Recharge } from '../domain/recharge';
import { Page } from '../domain/page';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})

export class RechargeComponent implements OnInit {

  recharges : Recharge[];

  page : Page;
  length = 100;
  pageIndex = 0;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10];
  pageEvent: PageEvent;

  columnsToDisplay = ['code', 'validFrom', 'validThru', 'length', 'left', 'action'];

  constructor(private rechargeService: RechargeService) { }

  ngOnInit() {
    this.getRecharges();
  }

  getRecharges(): void {
    this.rechargeService.getRechargePage(this.pageIndex, this.pageSize)
      .subscribe(page => {
        this.page = page;
        this.length = page.totalElements;
        this.recharges = page.content;
      });
  }

  changePage(pageEvent) {
    this.pageIndex = pageEvent.pageIndex;
    this.pageSize = pageEvent.pageSize;
    this.getRecharges();
  }
}
