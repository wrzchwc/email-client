import { Component} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{
  authenticationForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    passwordConfirmation: new FormControl('')
  })
  constructor() { }
}
