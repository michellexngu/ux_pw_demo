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

export function hasSpecialCharacter(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = new String(control.value);
    const hasSpecialCharacter = password.match(new RegExp("(?=.*[@$!%*#?&^_-])"));

    if (!hasSpecialCharacter) {
      return {noSpecialCharacter: true};
    }
    return null;
  }
}

export function hasLowercase(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = new String(control.value);
    const hasLowercase = password.match(new RegExp("(?=.*[a-z])"));

    if (!hasLowercase) {
      return {noLowercase: true};
    }
    return null;
  }
}

export function hasUppercase(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = new String(control.value);
    const hasUppercase = password.match(new RegExp("(?=.*[A-Z])"));

    if (!hasUppercase) {
      return {noUppercase: true};
    }
    return null;
  }
}

export function isPwUsed(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = new String(control.value);
    const isPwUsed = password.match(new RegExp("\bboiled\b"));

    if (!isPwUsed) {
      return {pwUsed: true};
    }
    return null;
  }
}
