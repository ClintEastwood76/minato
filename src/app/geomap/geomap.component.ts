import { Component, OnInit } from '@angular/core';
import { LocationService } from '../service/location.service';

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

  constructor(private locationService: LocationService) { }

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

}
