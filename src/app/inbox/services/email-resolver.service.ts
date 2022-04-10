import {Injectable} from '@angular/core';
import {Resolve} from "@angular/router";
import {Email} from "../interfaces/email";
import {ActivatedRouteSnapshot} from "@angular/router";
import {EmailService} from "./email.service";
import {Router} from "@angular/router";
import {catchError} from "rxjs";
import {EMPTY} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmailResolverService implements Resolve<Email> {

  constructor(private emailService: EmailService,
              private router: Router
  ) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.emailService
      .getEmail(route.params['id'])
      .pipe(catchError(() => {
        this.router.navigateByUrl('/inbox/not-found').then(() => {});
        return EMPTY;
      }));
  }
}
