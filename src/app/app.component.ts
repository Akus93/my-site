import { DOCUMENT } from '@angular/common';
import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Data, RouterOutlet } from '@angular/router';

import { routerTransition } from './animations/routerTransition.animation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [ routerTransition ],
})
export class AppComponent {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  public getOutletState(outlet: RouterOutlet): Data {
    return outlet.activatedRouteData['state'];
  }
}
