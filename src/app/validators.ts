import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function isValidDate(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const dateObj = new Date(control.value);
    const isValidDate = !isNaN(dateObj.getTime());

    if (!isValidDate) {
      return { invalidDate: true };
    }

    const year = dateObj.getFullYear();
    const isValidYear = year > 1900;

    return isValidYear ? null : { invalidYear: true };
  };
}

export function hasNumeric(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = new String(control.value);
    const hasNumeric = password.match(new RegExp("(?=.*[0-9])"));

    if (!hasNumeric) {
      return {noNumeric: true};
    }
    return null;
  }
}

export function hasLowercase(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = new String(control.value);
    const hasNumeric = password.match(new RegExp("(?=.*[a-z])"));

    if (!hasNumeric) {
      return {noLowercase: true};
    }
    return null;
  }
}
