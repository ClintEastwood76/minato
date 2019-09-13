import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  logged: boolean = false;

  constructor() { }

  isLogged() {
    return this.logged;
  }

  logout() {
    console.log('logging out');
    this.logged = false;
  }

  login(user, password) {
    console.log("Logging in...", user, password);
    if ('edo' == user) {
      this.logged = true;
    }
  }
}
