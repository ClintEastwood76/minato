import { Injectable } from '@angular/core';

import { RECHARGE } from './domain/mock-recharge';
import { Recharge } from './domain/recharge';

@Injectable({
  providedIn: 'root'
})
export class RechargeService {

  constructor() { }

  getRecharge(): Recharge[] {
    return RECHARGE;
  }
}
