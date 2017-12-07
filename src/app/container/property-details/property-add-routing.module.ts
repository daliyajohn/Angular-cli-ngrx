import { PropertyAddComponent } from './property-add.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const propertyAddRoutes: Routes = [
  {
    path: '',
    component: PropertyAddComponent
  }
];

export const PropertyAddRoutingModule: ModuleWithProviders = RouterModule.forChild(propertyAddRoutes);
