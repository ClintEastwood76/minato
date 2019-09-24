import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Recharge } from '../domain/recharge';

@Injectable({
  providedIn: 'root'
})
export class RechargeService {

  private rechargesUrl = 'http://localhost:8080/recharges';

  constructor(private http: HttpClient) { }

  getRecharges(): Observable<Recharge[]> {
    return this.http.get<Recharge[]>(this.rechargesUrl);
  }
}
