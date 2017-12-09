import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppService } from './app.service';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoresModule } from './store/core.module';
import { LayoutComponent } from './container/layout/layout.component';
import { ImageUploadModule } from 'angular2-image-upload';
import { PropertyAddReducer } from './store/reducer/property-add.reducer';


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
    ImageUploadModule.forRoot(),
    StoresModule,
    StoreModule.forRoot({ message: PropertyAddReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })
  ],
  providers: [ AppService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
