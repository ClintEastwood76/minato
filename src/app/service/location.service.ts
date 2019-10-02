import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  trackMe(): Observable<any> {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        console.log('ce l ho');
        return position;
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
}
