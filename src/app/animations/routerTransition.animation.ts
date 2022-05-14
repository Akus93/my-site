 import { trigger, animate, style, group, query, transition } from '@angular/animations';


export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%', maxWidth: '960px' })
      , { optional: true }),
    group([
      query(':enter', [
        style({ opacity: 0 }),
        animate('0.4s 400ms', style({ opacity: 1 }))
      ], { optional: true }),
      query(':leave', [
        style({ opacity: 1 }),
        animate('0.4s', style({opacity: 0}))
      ], { optional: true }),
    ])
  ])
]);
