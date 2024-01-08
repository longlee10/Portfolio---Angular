import { HttpClient } from '@angular/common/http';
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
    ]),
    email: new FormControl('', [
      Validators.required,
      Validator.invalidEmail,
      Validator.emptyInput,
    ]),
    message: new FormControl(),
  });

  constructor(private http: HttpClient) {}

  name() {
    return this.form.get('name');
  }

  email() {
    return this.form.get('email');
  }

  submit(form) {
    this.http
      .post('https://formspree.io/f/xwkdvodq', form.value)
      .subscribe((data) => {
        window.location.href = 'https://formspree.io' + data['next'];
        form.reset();
      });
  }
}
