import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {
  name = new FormControl();

  constructor() {
  }

  ngOnInit() {
  }

  updateName() {
    this.name.setValue(this.name.value);
  }
}
