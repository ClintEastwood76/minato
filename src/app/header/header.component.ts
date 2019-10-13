import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {}

  isLogged() {
    let user = JSON.parse(sessionStorage.getItem('currentUser'));
    return (user != null && user.token != null);
  }

  logout() {
    sessionStorage.clear();
  }

}
