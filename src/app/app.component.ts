import { Component } from '@angular/core';
import { SessionService } from './session.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'minato';
  session;

  constructor(sessionService: SessionService) {
    this.session = sessionService;
  }

  isLogged() {
    return this.session.isLogged();
  }
}
