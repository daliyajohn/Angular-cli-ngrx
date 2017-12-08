import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyAddComponent } from './property-add.component';
import { PropertyAddRoutingModule } from './property-add-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    PropertyAddRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  declarations: [ PropertyAddComponent ],
  exports: [ PropertyAddComponent ],
})
export class PropertyAddModule { }
