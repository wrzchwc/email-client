import {Component} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormControl} from "@angular/forms";
import {Validators} from "@angular/forms";
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  signInForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ]),
  })

  constructor(private authenticationService: AuthenticationService) {
  }

  onSubmit() {
    if (this.signInForm.invalid) return;
    this.authenticationService
      .signin(this.signInForm.value)
      .subscribe({
        next: () => {
        },
        error: ({error})=>{
          if (error.username || error.password){
            this.signInForm.setErrors({credentials: true});
          }
        }
      });
  }

}
