import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserModel } from './../../models/user.model';
import { CustomValidators } from './../../validators';

@Component({
  selector: 'app-signup-reactive-form',
  templateUrl: './signup-reactive-form.component.html',
  styleUrls: ['./signup-reactive-form.component.css']
})
export class SignupReactiveFormComponent implements OnInit {
  countries: Array<string> = ['Ukraine', 'Armenia', 'Belarus', 'Hungary', 'Kazakhstan', 'Poland', 'Russia'];
  user: UserModel = new UserModel(
    'John',
    'Doe',
    'j.doe@gmail.com',
    false
  );
  userForm: FormGroup;
  placeholder = {
    email: 'Email (required)',
    phone: 'Phone'
  };
  rMin = 1;
  rMax = 3;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    // this.createForm();
    // this.setFormValues();
    // this.patchFormValues();
    this.buildForm();
  }

  onSave() {
    console.log(this.userForm);
    console.log(`Saved: ${JSON.stringify(this.userForm.value)}`);
    console.log(`Saved: ${JSON.stringify(this.userForm.getRawValue())}`);
  }

  onSetNotification(notifyVia: string) {
    const phoneControl = this.userForm.get('phone');
    const emailControl = this.userForm.get('email');

    if (notifyVia === 'text') {
      phoneControl.setValidators(Validators.required);
      emailControl.clearValidators();
      this.placeholder.email = 'Email';
      this.placeholder.phone = 'Phone (required)';
    } else {
      emailControl.setValidators([
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+'),
        Validators.email
      ]);
      phoneControl.clearValidators();
      this.placeholder.email = 'Email (required)';
      this.placeholder.phone = 'Phone';
    }
    phoneControl.updateValueAndValidity();
    emailControl.updateValueAndValidity();
  }

  private buildForm() {
    this.userForm = this.fb.group({
      //firstName: ['', [Validators.required, Validators.minLength(3)]],
      firstName: new FormControl('', {validators: [Validators.required, Validators.minLength(3)], updateOn: 'blur'}),
      lastName: [{ value: 'Doe', disabled: false }, [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+'), Validators.email]],
      sendProducts: true,
      phone: '',
      notification: 'email',
      serviceLevel: [''],
    });
  }

  private createForm() {
    this.userForm = new FormGroup({
      firstName: new FormControl('', {
        validators: [Validators.required, Validators.minLength(3)],
        updateOn: 'blur'
      }),
      lastName: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      notification: new FormControl('email'),
      serviceLevel: new FormControl('', {
        validators: [CustomValidators.serviceLevel],
        updateOn: 'blur'
      }),
      sendProducts: new FormControl(true)
    });
  }

  private setFormValues() {
    this.userForm.setValue({
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      sendProducts: this.user.sendProducts
    });
  }

  private patchFormValues() {
    this.userForm.patchValue({
      firstName: this.user.firstName,
      lastName: this.user.lastName
    });
  }
}

