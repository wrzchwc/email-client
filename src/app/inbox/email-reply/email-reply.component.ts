import {Component, OnChanges} from '@angular/core';
import {Email} from "../interfaces/email";
import {Input} from "@angular/core";
import {EmailService} from "../services/email.service";

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.css']
})
export class EmailReplyComponent implements OnChanges {
  showModal: boolean;
  @Input() email!: Email

  constructor(private emailService: EmailService) {
    this.showModal = false;
  }

  ngOnChanges(): void {
    const text = this.email.text.replace(/\n/gi, '\n> ');

    this.email = {
      ...this.email,
      from: this.email.to,
      to: this.email.from,
      subject: `RE: ${this.email.subject}`,
      text: `\n\n\n----${this.email.from} wrote:\n${text}`
    }
  }

  onSubmit(email: Email) {
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false
    })
  }

}
