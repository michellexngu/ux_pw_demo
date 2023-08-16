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
  | 'pwUsed'
  ;

export const ERROR_MESSAGES: { [key: string]: (...args: any) => string } = {
  required: (formControlName: string) => `${formControlName} is required.`,
  minlength: (formControlName, requirement) =>
    `${formControlName} should be at least ${requirement} characters.`,
  noNumeric: () =>  `Password should contain at least one numeric character.`,
  noSpecialCharacter: () =>  `Password should contain at least one special character.`,
  noLowercase: () =>  `Password should contain at least one lowercase character.`,
  noUppercase: () =>  `Password should contain at least one uppercase character.`,
  pwUsed: () =>  `Password has already been used. Please choose another one`,
};
