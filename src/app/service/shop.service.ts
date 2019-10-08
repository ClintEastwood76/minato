import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Shop } from '../domain/shop';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private shopsUrl = 'http://localhost:8080/shopbox';

  constructor(private http: HttpClient) { }

  getShops(up, left, down, right): Observable<Shop[]> {
    let upLeft = up + ',' + left;
    let downRight = down + ',' + right;
    let params = new HttpParams();
    params = params.append('upleft', upLeft);
    params = params.append('downright', downRight);
    return this.http.get<Shop[]>(this.shopsUrl, {params});
  }
}
