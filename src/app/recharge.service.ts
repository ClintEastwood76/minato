import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { RECHARGE } from './domain/mock-recharge';
import { Recharge } from './domain/recharge';

@Injectable({
  providedIn: 'root'
})
export class RechargeService {

  private rechargesUrl = 'http://localhost:8080/recharges?owner=edo';

  constructor(private http: HttpClient) { }

  getRecharges(): Observable<Recharge[]> {
    //return of(RECHARGE);
    return this.http.get<Recharge[]>(this.rechargesUrl)
  }
}
