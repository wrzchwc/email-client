import {Injectable} from "@angular/core";
import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {filter, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // modify or log the outgoing request
    const modifiedReq = req.clone({withCredentials: true});
    return next.handle(modifiedReq)
      // .pipe(
      //   filter(value => value.type === HttpEventType.Sent),
      //   tap(() => console.log('Request was sent to server'))
      // );
  }

}
