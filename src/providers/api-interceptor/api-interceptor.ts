import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiInterceptorProvider implements HttpInterceptor {

  constructor(public http: HttpClient) {}

  // TODO inject token everytime

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiReq = req.clone({ url: `http://localhost:3000/api/${req.url}` });
    return next.handle(apiReq);
  }

}
