import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PropertyDetailsComponent } from './property-details.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'jjj', component: PropertyDetailsComponent }
    ])
  ],
  exports: [RouterModule]
})
export class PropertyDetailsRoutingModule { }
