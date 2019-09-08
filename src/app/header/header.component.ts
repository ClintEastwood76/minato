import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  session;

  constructor(sessionService: SessionService) {
    this.session = sessionService;
  }

  ngOnInit() {
    //console.log(this.sessionService);
    //logged = true;
  }

  isLogged() {
    return this.session.isLogged();
  }

  logout() {
    console.log('logging out');
    this.session.logout();
  }

}
