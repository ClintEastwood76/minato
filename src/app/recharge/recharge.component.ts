import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

import { RechargeService } from '../recharge.service';
import { Recharge } from '../domain/recharge';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})

export class RechargeComponent implements OnInit {

  recharges : Recharge[];

  constructor(private rechargeService: RechargeService,
              private sessionService: SessionService) { }

  ngOnInit() {
    this.getRecharges();
  }

  getRecharges(): void {
    this.rechargeService.getRecharges(this.sessionService.user)
      .subscribe(recharges => this.recharges = recharges);
}
}
