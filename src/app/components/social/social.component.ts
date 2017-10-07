import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialComponent {}
