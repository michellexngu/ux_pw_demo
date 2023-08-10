export type ErrorTypes =
  | 'required'
  | 'email'
  | 'minlength'
  | 'invalidDate'
  | 'invalidYear'
  | 'noNumeric'
  | 'noSpecialCharacter'
  | 'noLowercase'
  | 'noUppercase'
  ;

export const ERROR_MESSAGES: { [key: string]: (...args: any) => string } = {
  required: (formControlName: string) => `${formControlName} is required.`,

  email: () => `This is not a valid email address.`,
  minlength: (formControlName, requirement) =>
    `${formControlName} should be at least ${requirement} characters.`,
  invalidDate: () => `This is not a valid date.`,
  invalidYear: () => `Date of Birth should be after year 1900.`,
  noNumeric: () =>  `Password should contain at least one numeric character.`,
  noSpecialCharacter: () =>  `Password should contain at least one special character.`,
  noLowercase: () =>  `Password should contain at least one lowercase character.`,
  noUppercase: () =>  `Password should contain at least one uppercase character.`,
};
