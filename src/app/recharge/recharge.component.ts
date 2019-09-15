import { Component, OnInit } from '@angular/core';

import { RechargeService } from '../service/recharge.service';
import { Recharge } from '../domain/recharge';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})

export class RechargeComponent implements OnInit {

  recharges : Recharge[];

  constructor(private rechargeService: RechargeService) { }

  ngOnInit() {
    this.getRecharges();
  }

  getRecharges(): void {
    this.rechargeService.getRecharges('edo')
      .subscribe(recharges => this.recharges = recharges);
    }
}
