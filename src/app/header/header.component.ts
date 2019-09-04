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
    console.log("Costruttore " + sessionService);
    this.session = sessionService;
  }

  ngOnInit() {
    //console.log(this.sessionService);
    //logged = true;
  }

  isLogged() {
    return this.session.isLogged();
  }

  switch() {
    console.log('switching');
    this.session.switchLog();
  }

}
