import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FormGroupComponent } from './form-group/form-group.component';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    FormGroupComponent,
    ProfileEditorComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
