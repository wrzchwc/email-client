import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EmailSummary} from "./email-summary";

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  rootUrl = 'https://api.angular-email.com/emails'

  constructor(private httpClient: HttpClient) {
  }

  getEmails() {
    return this.httpClient.get<EmailSummary[]>(this.rootUrl)
  }
}
