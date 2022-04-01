import {Component} from '@angular/core';
import {AuthenticationService} from "../../authentication/authentication.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  signedIn = false;
  signedIn$: BehaviorSubject<boolean>;

  constructor(private authenticationService: AuthenticationService) {
    this.signedIn$ = this.authenticationService.signedIn$;
  }
}
