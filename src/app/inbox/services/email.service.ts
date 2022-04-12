import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EmailSummary} from "../interfaces/email-summary";
import {Email} from "../interfaces/email";

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

  getEmail(id: string) {
    return this.httpClient.get<Email>(`${this.rootUrl}/${id}`)
  }

  sendEmail(email: Email) {
    return this.httpClient.post(`${this.rootUrl}`, email)
  }
}
