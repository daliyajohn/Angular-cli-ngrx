import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppService } from './app.service';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LayoutComponent } from './container/layout/layout.component';
import { ImageUploadModule } from 'angular2-image-upload';
import * as fromStore from './store';
import { propertyReducer } from './store/reducers/property.reducer';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// import { reducerConnect } from './store';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    ImageUploadModule.forRoot(),
    StoreModule.forRoot({ dataReducer: propertyReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })
  ],
  providers: [ AppService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
