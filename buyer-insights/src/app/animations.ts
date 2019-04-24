import { trigger, transition, query, animateChild, group, style, animate } from '@angular/animations';

export const fadeInAnimation =
trigger('routeAnimations', [
  transition('HomePage <=> DetailPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ opacity: '0'})
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('350ms ease-out', style({ opacity: '0'}))
      ]),
      query(':enter', [
        animate('500ms ease-out', style({ opacity: '1'}))
      ])
    ]),
    query(':enter', animateChild()),
  ])
]);