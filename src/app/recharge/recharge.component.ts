import { Component, OnInit } from '@angular/core';

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

  columnsToDisplay = ['code', 'validFrom', 'validThru', 'length', 'left', 'action'];

  constructor(private rechargeService: RechargeService) { }

  ngOnInit() {
    this.getRecharges();
  }

  getRecharges(): void {
    // this.rechargeService.getRecharges()
    //   .subscribe(recharges => this.recharges = recharges);
    this.rechargeService.getRechargePage(1, 3)
      .subscribe(page => {
        this.page = page;
        this.recharges = page.content;
      });

  }


}
