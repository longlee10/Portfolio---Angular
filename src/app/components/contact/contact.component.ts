import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Validator } from './contact.validators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validator.containSpecialChar,
      Validator.emptyString,
    ]),
    email: new FormControl('', [
      Validators.required,
      Validator.validEmail,
      Validator.emptyString,
    ]),
    message: new FormControl(),
  });

  name() {
    return this.form.get('name');
  }

  email() {
    return this.form.get('email');
  }

  submit(form) {
    console.log(form.value);
  }
}
