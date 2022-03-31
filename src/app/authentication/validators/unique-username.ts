import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AbstractControl, AsyncValidator, ValidationErrors} from "@angular/forms";
import {Observable} from "rxjs";
import {map} from "rxjs";
import {catchError} from "rxjs";
import {of} from 'rxjs';

@Injectable({providedIn: 'root'})
export class UniqueUsername implements AsyncValidator {
  constructor(private httpClient: HttpClient) {
  }

  validate = (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    const {value} = control;

    return this.httpClient
      .post<any>('https://api.angular-email.com/auth/username', {
        username: value
      })
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
