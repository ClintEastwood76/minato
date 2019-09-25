import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Recharge } from '../domain/recharge';
import { Page } from '../domain/page';

@Injectable({
  providedIn: 'root'
})
export class RechargeService {

  private rechargesUrl = 'http://localhost:8080/recharges';

  constructor(private http: HttpClient) { }

  getRecharges(): Observable<Recharge[]> {
    return this.http.get<Recharge[]>(this.rechargesUrl);
  }

  getRechargePage(pageNum, pageSize): Observable<Page> {

    let params = new HttpParams();
    params = params.append('pagenum', pageNum);
    params = params.append('pagesize', pageSize);

    return this.http.get<Page>(this.rechargesUrl, {params});
  }
}
