import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'minato';

  constructor() {
  }

  isLogged() {
    // return localStorage.getItem('currentUser').token != null;
    // let logged = localStorage.getItem('currentUser');
    let user = JSON.parse(localStorage.getItem('currentUser'));
    return (user != null && user.token != null);
  }
}
