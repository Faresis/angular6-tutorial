import { AbstractControl, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';

export function checkServiceLevel(c:AbstractControl, min: number = 1, max: number = 5): { [key: string]: boolean } | null {
  if (c.value !== undefined && (Number.isNaN(c.value) || c.value < min || c.value > max)) {
    return { serviceLevel: true };
  }
  return null;
}

export class CustomValidators {
  static serviceLevel(c: AbstractControl): { [key: string]: boolean } | null {
    console.log('Validator: service level is called.');
    return checkServiceLevel(c);
  }

  static serviceLevelRange(min: number, max: number): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
      return checkServiceLevel(c, min, max);
    };
  }

  static asyncEmailPromiseValidator(c: AbstractControl): Promise<{ [key: string]: any } | null> |
    Observable<{ [key: string]: any } | null> {
    const email = c.value;

    return new Promise(resolve => {
      setTimeout(() => {
        if (email === 'existsemail@example.com') {
          resolve({
            asyncEmailInvalid: true
          });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }

  static emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
    const emailControl = c.get('email');
    const emailConfirmControl = c.get('confirmEmail');

    if (emailControl.pristine || emailConfirmControl.pristine) {
      return null;
    }

    if (emailControl.value === emailConfirmControl.value) {
      return null;
    }

    return { 'emailMatch': true };
  }
}

