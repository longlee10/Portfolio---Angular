import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Validator } from './contact.validators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
    email: new FormControl('', [Validators.required, Validator.invalidEmail]),
    message: new FormControl(),
  });

  private url = '';

  constructor(private http: HttpClient, private router: Router) {}

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
