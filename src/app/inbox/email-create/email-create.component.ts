import {Component, OnInit} from '@angular/core';
import {Email} from "../interfaces/email";
import {AuthenticationService} from "../../authentication/authentication.service";
import {EmailService} from "../services/email.service";

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css']
})
export class EmailCreateComponent implements OnInit {
  showModal = false;
  email: Email;

  constructor(private authenticationService: AuthenticationService,
              private emailService: EmailService
  ) {
    this.email = {
      id: '',
      to: '',
      subject: '',
      html: '',
      text: '',
      from: `${authenticationService.username}@angular-email.com`
    }
  }

  ngOnInit(): void {
  }

  onSubmit(email: Email) {
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    });
  }

}
