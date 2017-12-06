import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyDetailsComponent } from './property-details.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule
  ],
  declarations: [ PropertyDetailsComponent ]
})
export class PropertyDetailsModule { }
