import {Component, OnInit} from '@angular/core';
import {EmailService} from "../email.service";
import {EmailSummary} from "../email-summary";

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.css']
})
export class EmailIndexComponent implements OnInit {
  emails: EmailSummary[] = []

  constructor(private emailService: EmailService) {
  }

  ngOnInit(): void {
    this.emailService.getEmails().subscribe((emails) => {
      this.emails = emails
    });
  }

}
