import { Component, OnInit } from '@angular/core';
import { LocationService } from '../service/location.service';

@Component({
  selector: 'app-geomap',
  templateUrl: './geomap.component.html',
  styleUrls: ['./geomap.component.css']
})
export class GeomapComponent implements OnInit {

  // apiKey = 'AIzaSyBoEg0NGE38ROKW-ogIUbyj5rZz1MFn3Yc';

  latitude = 41.932649;
  longitude = 12.494347;
  zoom = 16;
  mapType = 'roadmap';

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    console.log(this.locationService.trackMe());
  }

}
