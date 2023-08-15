import { Injectable } from '@angular/core';
import { ErrorTypes, ERROR_MESSAGES } from './error-messages';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor() {}

  getErrorValidationMessage(
    formControlName: string,
    errors: [string, any][]
  ): string {
    switch (true) {
      case this.checkErrorType(errors, 'required'):
        return ERROR_MESSAGES['required'](formControlName);
      case this.checkErrorType(errors, 'noNumeric'):
        return ERROR_MESSAGES['noNumeric']();
      case this.checkErrorType(errors, 'noSpecialCharacter'):
        return ERROR_MESSAGES['noSpecialCharacter']();
      case this.checkErrorType(errors, 'noLowercase'):
        return ERROR_MESSAGES['noLowercase']();
      case this.checkErrorType(errors, 'noUppercase'):
        return ERROR_MESSAGES['noUppercase']();
      case this.checkErrorType(errors, 'email'):

      case this.checkErrorType(errors, 'minlength'):
        const minRequirement = this.getErrorMessage(
          errors,
          'minlength'
        )?.requiredLength;
        return ERROR_MESSAGES['minlength'](formControlName, minRequirement);

      default:
        return '';
    }
  }

  checkErrorType(errors: [string, any][], key: ErrorTypes) {
    return errors.some(([errorKey, value]) => errorKey === key);
  }

  getErrorMessage(errors: [string, any][], key: ErrorTypes) {
    return errors.find(([k, v]) => k === key)?.[1];
  }
}
