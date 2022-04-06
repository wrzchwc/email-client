import {Component} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormControl} from "@angular/forms";
import {Validators} from "@angular/forms";
import {MatchPassword} from "../validators/match-password";
import {UniqueUsername} from "../validators/unique-username";
import {AuthenticationService} from "../authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  authenticationForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/)
    ], [
      this.uniqueUsername.validate
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ]),
    passwordConfirmation: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ])
  }, {
    validators: [this.matchPassword.validate]
  })

  constructor(private matchPassword: MatchPassword,
              private uniqueUsername: UniqueUsername,
              private authenticationService: AuthenticationService,
              private router: Router
  ) {
  }

  onSubmit() {
    if (this.authenticationForm.invalid) return;
    this.authenticationService.signup(this.authenticationForm.value)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('/inbox')
        },
        error: (err) => {
          this.authenticationForm.setErrors(!err.status ? {noConnection: true} : {unknownError: true})
        }
      });
  }
}
