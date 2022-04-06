import {Injectable} from '@angular/core';
import {CanLoad, Route, UrlSegment, UrlTree} from '@angular/router';
import {Observable, take} from 'rxjs';
import {skipWhile} from "rxjs";
import {tap} from "rxjs";
import {AuthenticationService} from "./authentication.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanLoad {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
  }

  //expects to return Observable that will be marked as complete
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authenticationService.signedIn$.pipe(
      skipWhile(value => value === null),
      take(1),
      tap((authenticated)=>{
        if (!authenticated){
          this.router.navigateByUrl('/');
        }
      })
    );
  }
}
