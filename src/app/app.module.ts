import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PwInputComponent } from './pw-input/pw-input.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ShowErrorDirective } from './show-error.directive';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import {ModalComponent} from "./components/profile-form/modal/modal.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    PwInputComponent,
    ShowErrorDirective,
    FormFieldComponent,
    ProfileFormComponent,
    ModalComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FontAwesomeModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
