import { PropertyListComponent } from './property-list.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const propertyListRoutes: Routes = [
  {
    path: '',
    component: PropertyListComponent
  }
];

export const PropertyListRoutingModule: ModuleWithProviders = RouterModule.forChild(propertyListRoutes);
