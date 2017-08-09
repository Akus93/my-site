import { trigger, state, animate, transition, style } from '@angular/animations';

export const timelineAnimation =
  trigger('timelineAnimation', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('.3s', style({ opacity: 1 }))
    ]),
]);
