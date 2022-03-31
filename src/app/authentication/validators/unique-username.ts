import {Injectable} from "@angular/core";
import {AbstractControl, AsyncValidator, ValidationErrors} from "@angular/forms";
import {Observable} from "rxjs";
import {map} from "rxjs";
import {catchError} from "rxjs";
import {of} from 'rxjs';
import {AuthenticationService} from "../authentication.service";

@Injectable({providedIn: 'root'})
export class UniqueUsername implements AsyncValidator {
  constructor(private authenticationService: AuthenticationService) {
  }

  validate = (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return this.authenticationService.usernameAvailable(control.value)
      .pipe(
        map(() => {
          return null
        }),
        catchError((err) => {
          return of(err.status === 422 ? {nonUniqueUsername: true} : {noConnection: true});
        })
      )
  }
}
