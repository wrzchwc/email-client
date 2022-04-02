import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SignupCredentials} from "./interfaces/signup-credentials";
import {SignupResponse} from "./interfaces/signup-response";
import {UsernameAvailable} from "./interfaces/username-available";
import {BehaviorSubject, tap} from "rxjs";
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  rootUrl = 'https://api.angular-email.com';
  signedIn$ = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient) {
  }

  usernameAvailable(username: string) {
    return this.httpClient.post<UsernameAvailable>(`${this.rootUrl}/auth/username`, {
      username: username
    })
  }

  signup(credentials: SignupCredentials) {
    return this.httpClient
      .post<SignupResponse>(`${this.rootUrl}/auth/signup`, {
        username: credentials.username,
        password: credentials.password,
        passwordConfirmation: credentials.passwordConfirmation
      }, {
        withCredentials: true
      })
      .pipe(
        tap(() => {
          this.signedIn$.next(true);
        })
      )
  }

  checkAuthentication() {
    return this.httpClient
      .get(`${this.rootUrl}/auth/signedin`, {
        withCredentials: true
      })
      .pipe(
        tap(response => console.log(response))
      )
  }
}
