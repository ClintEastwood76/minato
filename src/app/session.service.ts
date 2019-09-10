import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  logged: boolean = false;
  user : string;

  constructor() { }

  isLogged() {
    return this.logged;
  }

  logout() {
    this.logged = false;
  }

  login(user, password) {
    if ('edo' == user) {
      this.user = user;
      this.logged = true;
    }
  }
}
