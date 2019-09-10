import { Component, OnInit } from '@angular/core';

import { RECHARGE } from '../domain/mock-recharge';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit {

  recharges = RECHARGE;
  
  constructor() { }

  ngOnInit() {
  }

}
