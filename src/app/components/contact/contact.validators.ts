import { AbstractControl, ValidationErrors } from '@angular/forms';

export class Validator {
  static containSpecialChar(control: AbstractControl): ValidationErrors | null {
    return !/^[a-zA-Z\s]*$/.test(control.value as string)
      ? { containSpecialChar: true }
      : null;
  }

  static invalidEmail(control: AbstractControl): ValidationErrors | null {
    const emailForm = /^([a-zA-Z0-9._%+-]+)?@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return !emailForm.test(control.value as string)
      ? { invalidEmail: true }
      : null;
  }

  static emptyInput(control: AbstractControl): ValidationErrors | null {
    const emptyInput = /^$/;
    return emptyInput.test(control.value as string)
      ? { emptyInput: true }
      : null;
  }
}
