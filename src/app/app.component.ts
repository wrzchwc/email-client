import {Component} from '@angular/core';
import {OnInit} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {AuthenticationService} from "./authentication/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signedIn = false;
  signedIn$: BehaviorSubject<boolean>;

  constructor(private authenticationService: AuthenticationService) {
    this.signedIn$ = this.authenticationService.signedIn$;
  }

  ngOnInit() {
    this.authenticationService.checkAuthentication().subscribe(() => {
    });
  }
}
