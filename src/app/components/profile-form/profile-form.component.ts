import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {hasLowercase, hasNumeric, hasSpecialCharacter, hasUppercase, isPwUsed} from '../../validators';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css'],
})
export class ProfileFormComponent {
  // Variables
  public showPassword: boolean = false;

  profileForm = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      hasNumeric(),
      hasLowercase(),
      hasUppercase(),
      hasSpecialCharacter(),
      hasLowercase(),
      hasUppercase(),
      isPwUsed()
    ]),
  });


  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
