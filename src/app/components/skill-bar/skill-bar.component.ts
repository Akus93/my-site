import { Component, Input, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillBarComponent {
  @Input() value!: number;
}
