import {trigger, animate, style, group, query, transition, stagger} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  // transition('* => history', [
  //   query(':enter, :leave', style({ position: 'fixed', width: '100%', maxWidth: '960px' })
  //     , { optional: true }),
  //   query(':enter .timeline ul li', style({ height: 0, opacity: 0 })),
  //   group([
  //     query(':enter', [
  //       style({ opacity: 0 }),
  //       animate('0.3s 300ms', style({ opacity: 1 }))
  //     ], { optional: true }),
  //     query(':leave', [
  //       style({ opacity: 1 }),
  //       animate('0.3s', style({opacity: 0}))
  //     ], { optional: true }),
  //   ]),
  //   query(':enter .timeline ul li', stagger(100, [
  //     animate('.7s',
  //       style({  height: '*', opacity: 1 })),
  //   ]))
  // ]),

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
