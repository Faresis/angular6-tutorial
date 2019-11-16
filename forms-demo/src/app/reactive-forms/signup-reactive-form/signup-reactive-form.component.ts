import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UserModel } from './../../models/user.model';

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

  private buildForm() {
    this.userForm = this.fb.group({
      firstName: '',
      lastName: { value: 'Doe', disabled: true },
      email: [''],
      sendProducts: true
    });
  }

  private createForm() {
    this.userForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
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

