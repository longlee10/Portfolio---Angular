import { AbstractControl, ValidationErrors } from '@angular/forms';

export class Validator {
  static containSpecialChar(control: AbstractControl): ValidationErrors | null {
    return !/^[a-zA-Z\s]+$/.test(control.value as string)
      ? { containSpecialChar: true }
      : null;
  }

  static validEmail(control: AbstractControl): ValidationErrors | null {
    const emailForm =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !emailForm.test(control.value as string)
      ? { validEmail: true }
      : null;
  }

  static emptyString(control: AbstractControl): ValidationErrors | null {
    return control.value == ' ' ? { emptyString: true } : null;
  }
}
