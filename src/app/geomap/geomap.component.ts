import { Component, OnInit } from '@angular/core';
import { LocationService } from '../service/location.service';
import { GoogleMapsAPIWrapper } from '@agm/core';

import { map } from 'rxjs/operators';
@Component({
  selector: 'app-geomap',
  templateUrl: './geomap.component.html',
  styleUrls: ['./geomap.component.css']
})
export class GeomapComponent implements OnInit {

  // apiKey = 'AIzaSyBoEg0NGE38ROKW-ogIUbyj5rZz1MFn3Yc';

  latitude;
  longitude;
  zoom = 16;
  mapType = 'roadmap';

  debouncing: booolean = false;
  bounds;


  constructor(private locationService: LocationService) {}

  ngOnInit() {
    this.getMyPosition();
  }

  getMyPosition(): void {
    this.locationService.getPosition().subscribe(
        (pos: Position) => {
            this.latitude = pos.coords.latitude;
            this.longitude = pos.coords.longitude;
        });
    }

    mapChange($event, millis) {
      this.bounds = $event;
      if (this.debouncing == false) {
        this.debouncing = true;
        var self = this;
        setTimeout(function() {
          self.debouncing = false;
          console.log('calling ' + self.bounds);
        }, millis);
      }
    }

}
