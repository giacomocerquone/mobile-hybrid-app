import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthServiceProvider } from '../auth-service/auth-service';

@Injectable()
export class ApiInterceptorProvider implements HttpInterceptor {

  constructor(public http: HttpClient, private authService: AuthServiceProvider) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiReq = req.clone({
      setHeaders: this.authService.isConnected()
        ? { Authorization: this.authService.getToken() }
        : null,
      url: `http://localhost:3000/api/${req.url}`,
    });
    return next.handle(apiReq);
  }

}
