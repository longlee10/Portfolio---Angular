import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Validator } from './contact.validators';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) {}

  private url: string = '/assets/json/overview.json';
  link = {};

  ngOnInit() {
    this.http.get(this.url).subscribe((json) => {
      this.link = json['link'];
    });
  }

  name() {
    return this.form.get('name');
  }

  email() {
    return this.form.get('email');
  }

  submit(form) {
    console.log(form.value);
  }

  openPage(event: any) {
    window.open(this.link[event.name]);
  }
}
