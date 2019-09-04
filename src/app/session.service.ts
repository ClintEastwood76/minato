import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  logged: boolean = true;

  constructor() { }

  isLogged() {
    return this.logged;
  }

  switchLog() {
    console.log('switching');
    this.logged = !this.logged;
  }
}
