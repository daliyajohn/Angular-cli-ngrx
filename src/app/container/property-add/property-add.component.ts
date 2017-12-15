import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from './property-add.interface';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-property-add',
  templateUrl: './property-add.component.html',
  styleUrls: ['./property-add.component.css']
})

export class PropertyAddComponent implements OnInit {
  propertyAdd: FormGroup;
  public submitted: boolean;
  public events: any[] = [];

  propertyName: string;
  email: string;
  phoneno: number;
  city: string;
  district: string;
  state: string;

  detailedData$: Observable<any>;

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(private _fb: FormBuilder, private store: Store<any>) {
    this.propertyAdd = this._fb.group({
      propertyName: [this.propertyName,  Validators.compose([<any>Validators.required, <any>Validators.maxLength(30)])],
      email: [this.email,  Validators.compose([<any>Validators.required, <any>Validators.maxLength(30)])],
      phoneno: [this.phoneno,  Validators.compose([<any>Validators.required, <any>Validators.maxLength(30)])],
      city: [this.city,  Validators.compose([<any>Validators.required, <any>Validators.maxLength(30)])],
      district: [this.district,  Validators.compose([<any>Validators.required, <any>Validators.maxLength(30)])],
      state: [this.state,  Validators.compose([<any>Validators.required, <any>Validators.maxLength(30)])],
    });
   }

   ngOnInit() {
    this.detailedData$ = this.store.select<any>('dataReducer');
    console.log('daliya'  , this.propertyAdd.value.propertyName);
   }

   savePropertyDetails() {
    this.store.dispatch(
      {
        type: 'SUBMIT_SUCCESS',
        payload: {
          id: '1',
          property_name: this.propertyAdd.value.propertyName,
          email: this.propertyAdd.value.email,
          phone_number: this.propertyAdd.value.phoneno,
          city: this.propertyAdd.value.city,
          district: this.propertyAdd.value.district,
          state: this.propertyAdd.value.state
        }
      }
    );
  }






}
