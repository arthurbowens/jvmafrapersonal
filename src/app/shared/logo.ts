import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logo',
  imports: [RouterLink],
  template: `
    <a [routerLink]="link()" class="flex flex-col justify-center" (click)="clicked.emit()">
      <span class="font-display text-[1.45rem] leading-none tracking-wide text-white">João Victor</span>
      <span class="mt-1 block h-0.5 w-14 bg-linear-to-r from-orange via-orange-light to-blue shadow-[0_0_12px_rgba(255,102,0,0.6)]"></span>
      <span class="mt-1 text-[9px] font-semibold uppercase tracking-[0.28em] text-white/70">Personal trainer</span>
    </a>
  `,
})
export class Logo {
  readonly link = input('/');
  readonly clicked = output<void>();
}
