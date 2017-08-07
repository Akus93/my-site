import { Component } from '@angular/core';
import {routerTransition} from './animations/routerTransition.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ routerTransition ],
})
export class AppComponent {

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

}
