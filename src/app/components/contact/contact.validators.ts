import { AbstractControl, ValidationErrors } from '@angular/forms';

export class Validator {
  static containSpecialChar(control: AbstractControl): ValidationErrors | null {
    return !/^[a-zA-Z\s]*$/.test(control.value as string)
      ? { containSpecialChar: true }
      : null;
  }

  static invalidEmail(control: AbstractControl): ValidationErrors | null {
    const emailForm =
      /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    return !emailForm.test(control.value as string)
      ? { invalidEmail: true }
      : null;
  }
}
