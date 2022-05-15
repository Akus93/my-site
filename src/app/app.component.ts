import { DOCUMENT } from '@angular/common';
import { Component, ChangeDetectionStrategy, OnInit, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { routerTransition } from './animations/routerTransition.animation';
import { schema } from './schema';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [ routerTransition ],
})
export class AppComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.addSchema();
  }

  public getOutletState(outlet: RouterOutlet) {
    return outlet.activatedRouteData['state'];
  }

  private addSchema(): void {
    const scriptTag = this.document.createElement('script');
    scriptTag.type = 'application/ld+json';
    scriptTag.innerHTML = JSON.stringify(schema, null, 2);
    this.document.head.appendChild(scriptTag);
  }

}
