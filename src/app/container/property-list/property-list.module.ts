import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyListComponent } from './property-list.component';
import { PropertyListRoutingModule } from './property-list-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    PropertyListRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule
  ],
  declarations: [ PropertyListComponent ],
  exports: [ PropertyListComponent ],
})
export class PropertyListModule { }
