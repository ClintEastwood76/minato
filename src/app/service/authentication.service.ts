import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, mergeMap, mapTo } from 'rxjs/operators';

// import { environment } from '@environments/environment';
import { User } from '../domain/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  private authUrl = 'http://localhost:8080/authenticate';
  private infoUrl = 'http://localhost:8080/user';

  private tempToken;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
      return this.http.post<any>(this.authUrl, { username, password })
        .pipe(map(user => {
                user.username = username;
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    newLogin(username: string, password: string) {
      return this.http.post<any>(this.authUrl, { username, password })
      .pipe(
        map(user => {
          console.log('ce lho???' + JSON.stringify(user))
          sessionStorage.setItem('currentUser', JSON.stringify(user));
          this.tempToken = user.token;
          console.log(this.tempToken);
        }),
        mergeMap(user =>
          this.http.get<User>(this.infoUrl)
          .pipe(
            map(userDetail => {
              userDetail.token = this.tempToken;
              sessionStorage.setItem('currentUser', JSON.stringify(userDetail));
            })
          )
        )
      );
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
