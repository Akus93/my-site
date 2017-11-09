import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryComponent {}
