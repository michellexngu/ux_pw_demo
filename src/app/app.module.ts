import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PwInputComponent } from './pw-input/pw-input.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ShowErrorDirective } from './show-error.directive';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PwInputComponent,
    ShowErrorDirective,
    FormFieldComponent,
    ProfileFormComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
