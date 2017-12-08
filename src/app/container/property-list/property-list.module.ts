import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyListRoutingModule } from './property-list-routing.module';
import { PropertyListComponent } from './property-list.component';

@NgModule({
  imports: [
    CommonModule,
    PropertyListRoutingModule
  ],
  declarations: [PropertyListComponent],
  exports: [PropertyListComponent]
})
export class PropertyListModule { }
