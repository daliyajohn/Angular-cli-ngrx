import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SIDENAV_OPEN } from './store/actions/property.action';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private store: Store<any>) {}
  sideNavState() {
    this.store.dispatch({
      type: SIDENAV_OPEN
    });
  }
}
