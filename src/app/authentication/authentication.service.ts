import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SignupCredentials} from "./interfaces/signup-credentials";
import {SignupResponse} from "./interfaces/signup-response";
import {UsernameAvailable} from "./interfaces/username-available";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  rootUrl = 'https://api.angular-email.com';

  constructor(private httpClient: HttpClient) {
  }

  usernameAvailable(username: string) {
    return this.httpClient.post<UsernameAvailable>(`${this.rootUrl}/auth/username`, {
      username: username
    })
  }

  signup(credentials: SignupCredentials) {
    return this.httpClient.post<SignupResponse>(`${this.rootUrl}/auth/signup`, {
      username: credentials.username,
      password: credentials.password,
      passwordConfirmation: credentials.passwordConfirmation
    })
  }
}
