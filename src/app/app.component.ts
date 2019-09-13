import { Component } from '@angular/core';
import { SessionService } from './service/session.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'minato';

  constructor(private sessionService: SessionService) {
  }

  isLogged() {
    return this.sessionService.isLogged();
  }
}
