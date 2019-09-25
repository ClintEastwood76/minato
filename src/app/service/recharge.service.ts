import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Recharge } from '../domain/recharge';
import { Page } from '../domain/page';

@Injectable({
  providedIn: 'root'
})
export class RechargeService {

  private rechargesUrl = 'http://localhost:8080/recharges';
  private rechargesPagedUrl = 'http://localhost:8080/rechargepage';

  constructor(private http: HttpClient) { }

  getRecharges(): Observable<Recharge[]> {
    return this.http.get<Recharge[]>(this.rechargesUrl);
  }

  getRechargePage(): Observable<Page> {
    return this.http.get<Page>(this.rechargesPagedUrl);
  }
}
