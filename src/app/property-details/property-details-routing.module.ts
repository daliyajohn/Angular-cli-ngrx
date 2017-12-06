import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PropertyDetailsComponent } from './property-details.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: PropertyDetailsComponent }
    ])
  ],
  exports: [RouterModule]
})
export class PropertyDetailsRoutingModule { }
