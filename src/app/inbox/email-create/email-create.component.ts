import {Component, OnInit} from '@angular/core';
import {Email} from "../interfaces/email";
import {AuthenticationService} from "../../authentication/authentication.service";

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css']
})
export class EmailCreateComponent implements OnInit {
  showModal = false;
  email: Email;

  constructor(private authenticationService:AuthenticationService) {
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

}
