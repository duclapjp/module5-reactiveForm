import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  proFileEditor = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  constructor() {
  }

  ngOnInit() {
    console.log(this.proFileEditor.value);
  }

  onSubmit(proFileEditor: FormGroup) {
    console.log(this.proFileEditor.value);
  }

  updateProfile() {
    this.proFileEditor.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
    console.log(this.proFileEditor.value);
  }
}
