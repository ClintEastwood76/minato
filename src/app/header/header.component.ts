import { Component, OnInit } from '@angular/core';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private sessionService: SessionService) {

  }

  ngOnInit() {}

  isLogged() {
    return this.sessionService.isLogged();
  }

  logout() {
    this.sessionService.logout();
  }

}
