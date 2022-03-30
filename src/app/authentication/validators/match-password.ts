import {AbstractControl} from "@angular/forms";
import {ValidationErrors} from "@angular/forms";
import {Validator} from "@angular/forms";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class MatchPassword implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const {password, passwordConfirmation} = control.value;
    if (password === passwordConfirmation) {
      return null;
    }
    return {passwordsMatch: false};
  }
}
