import { Component, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent implements OnInit, OnDestroy {

  public longLoad = false;
  private longLoadTimeoutId: any;

  constructor() {}

  ngOnInit() {
    this.longLoadTimeoutId = setTimeout(() => {
      this.longLoad = true;
    }, 4000);
  }

  ngOnDestroy() {
    clearTimeout(this.longLoadTimeoutId);
  }

}
