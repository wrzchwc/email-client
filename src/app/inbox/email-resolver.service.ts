import {Injectable} from '@angular/core';
import {Resolve} from "@angular/router";
import {Email} from "./interfaces/email";
import {ActivatedRouteSnapshot} from "@angular/router";
import {EmailService} from "./email.service";

@Injectable({
  providedIn: 'root'
})
export class EmailResolverService implements Resolve<Email> {

  constructor(private emailService: EmailService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.emailService.getEmail(route.params['id']);
  }
}
