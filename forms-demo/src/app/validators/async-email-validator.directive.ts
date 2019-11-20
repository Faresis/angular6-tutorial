import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, first } from 'rxjs/operators';

import { CustomValidators } from './custom.validators';

@Directive({
  selector: '[appAsyncEmailValidator][formControlName],[appAsyncEmailValidator][ngModel]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: AsyncEmailValidatorDirective,
    multi: true
  }]
})
export class AsyncEmailValidatorDirective implements Validator {
  validate(c: AbstractControl): Promise<{[key: string]: any}>|Observable<{[key: string]: any}> {
    return CustomValidators.asyncEmailPromiseValidator(c);
  }
}
