import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-pw-input',
  templateUrl: './pw-input.component.html',
  styleUrls: ['./pw-input.component.scss']
})
export class PwInputComponent {

  constructor(private fb: FormBuilder) {}

  // Variables
  public showPassword: boolean = false;
  //
  // // Form Control
  // pwFormControl = new FormControl('', [Validators.required, Validators.pattern(
  //   /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
  // )]);

  passwordFormGroup: FormGroup = this.fb.group({
    password:['', Validators.required, Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)]
    }
  )

  // passwordForm: FormGroup = new FormGroup({
  //   password1: new FormControl<string>('', [Validators.required]),
  //   password2: new FormControl<string>('', [Validators.required]),
  // });

  // Functions
  submit() {
    // this.checkPwUppercase(password);
    this.clear();
  }

  clear() {

  }

  // checkPwUppercase(password:string) {
  //   if (password.match(["A-Z"])) {
  //
  //   }
  // }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
