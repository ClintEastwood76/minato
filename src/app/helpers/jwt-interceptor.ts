import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        if (null != sessionStorage.getItem('currentUser')) {
          let auth = JSON.parse(sessionStorage.getItem('currentUser')).token;
          request = request.clone({

            setHeaders: {
                Authorization: `${auth}`
            }
          });
        }
/*
        let currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
*/
        return next.handle(request);
    }
}
