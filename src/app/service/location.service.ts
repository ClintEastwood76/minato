import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  public getPosition(): Observable<Position> {
      return Observable.create(
        (observer) => {
        navigator.geolocation.watchPosition((pos: Position) => {
          observer.next(pos);
        }),
        () => {
            console.log('Position is not available');
        },
        {
          enableHighAccuracy: true
        };
      });
    }

}
