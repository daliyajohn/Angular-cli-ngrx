import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PropertyAddComponent } from './container/property-add/property-add.component';
import { LayoutComponent } from './layout/layout.component';

const appRoutes = [
      { path: '', redirectTo: 'propertyadd', pathMatch: 'full'},
      { path: '', component: LayoutComponent,
        children: [
          {
            path: 'propertyadd',
            loadChildren: 'app/container/property-add/property-add.module#PropertyAddModule'
          },
          {
            path: 'propertylist',
            loadChildren: 'app/container/property-list/property-list.module#PropertyListModule'
          }
        ]
      },
      // otherwise redirect to home
      { path: '**', redirectTo: 'unavaliable' }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: false})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

