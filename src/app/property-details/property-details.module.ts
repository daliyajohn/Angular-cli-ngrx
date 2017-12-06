import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyDetailsComponent } from './property-details.component';
import { PropertyDetailsRoutingModule } from './property-details-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    PropertyDetailsRoutingModule,
    FlexLayoutModule
  ],
  declarations: [ PropertyDetailsComponent ],
  exports: [ PropertyDetailsComponent ],
})
export class PropertyDetailsModule { }
