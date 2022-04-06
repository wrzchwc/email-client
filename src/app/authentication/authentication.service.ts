import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SignupCredentials} from "./interfaces/signup-credentials";
import {SignupResponse} from "./interfaces/signup-response";
import {UsernameAvailable} from "./interfaces/username-available";
import {BehaviorSubject, tap} from "rxjs";
import {SignedInResponse} from "./interfaces/signed-in-response";
import {SignInCredentials} from "./interfaces/sign-in-credentials";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  rootUrl = 'https://api.angular-email.com';
  signedIn$ = new BehaviorSubject<any>(null);

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
      })
      .pipe(tap(() => this.signedIn$.next(true)));
  }

  checkAuthentication() {
    return this.httpClient
      .get<SignedInResponse>(`${this.rootUrl}/auth/signedin`)
      .pipe(tap(({authenticated}) => this.signedIn$.next(authenticated)));
  }

  signout() {
    return this.httpClient
      .post(`${this.rootUrl}/auth/signout`, {})
      .pipe(tap(() => this.signedIn$.next(false)));
  }

  signin(credentials: SignInCredentials) {
    return this.httpClient
      .post(`${this.rootUrl}/auth/signin`, credentials)
      .pipe(tap(() => this.signedIn$.next(true)));
  }
}
