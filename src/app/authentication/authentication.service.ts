import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface UsernameAvailable {
  available:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient : HttpClient) { }

  usernameAvailable(username:string){
    return this.httpClient.post<UsernameAvailable>('https://api.angular-email.com/auth/username',{
      username: username
    })
  }
}
