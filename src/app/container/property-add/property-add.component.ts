import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from './property-add.interface';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-property-add',
  templateUrl: './property-add.component.html',
  styleUrls: ['./property-add.component.css']
})

export class PropertyAddComponent {
  propertyAdd: FormGroup;
  public submitted: boolean;
  public events: any[] = [];
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(private _fb: FormBuilder) {
    this.propertyAdd = this._fb.group({
      propertyName: ['',  Validators.compose([<any>Validators.required, <any>Validators.maxLength(30)])],
      email: ['',  Validators.compose([<any>Validators.required, <any>Validators.maxLength(30)])],
      phoneno: ['',  Validators.compose([<any>Validators.required, <any>Validators.maxLength(30)])],
      city: ['',  Validators.compose([<any>Validators.required, <any>Validators.maxLength(30)])],
      district: ['',  Validators.compose([<any>Validators.required, <any>Validators.maxLength(30)])],
      state: ['',  Validators.compose([<any>Validators.required, <any>Validators.maxLength(30)])],
    });
   }

  savePropertyDetails() {
    // code
  }
}
