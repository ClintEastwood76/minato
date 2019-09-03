import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  logged: boolean = false;

  constructor() { }
}
