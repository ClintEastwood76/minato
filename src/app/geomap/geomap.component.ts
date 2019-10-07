import { Component, OnInit } from '@angular/core';
import { LocationService } from '../service/location.service';
import { ShopService } from '../service/shop.service';
import { Shop } from '../domain/shop';


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
  shopList: Shop[];

  debouncing: boolean = false;
  bounds;


  constructor(private locationService: LocationService, private shopService: ShopService) {
    console.log(shopService);
  }

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
          /*console.log(self.bounds.na.j);
          console.log(self.bounds.na.l);
          console.log(self.bounds.ga.j);
          console.log(self.bounds.ga.l);*/
          self.shopService.getShops(self.bounds.ga.j, self.bounds.na.j, self.bounds.ga.l, self.bounds.ga.j)
          .subscribe(shops => {
            this.shopList = shops;
            console.log(this.shopList);
          });
        }, millis);
      }
    }

}
