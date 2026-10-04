import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { brand } from '../core/brand';

@Component({
  selector: 'app-logo',
  imports: [RouterLink],
  template: `
    <a [routerLink]="link()" class="flex flex-col justify-center" (click)="clicked.emit()">
      <span class="font-display text-[1.35rem] leading-none tracking-[0.12em] text-white uppercase">{{
        brand.name
      }}</span>
      <span class="mt-1 block h-0.5 w-16 bg-linear-to-r from-orange via-orange-light to-blue shadow-[0_0_12px_rgba(255,102,0,0.6)]"></span>
      <span class="mt-1 text-[8px] font-semibold uppercase tracking-[0.24em] text-white/70">{{
        brand.subtitle
      }}</span>
    </a>
  `,
})
export class Logo {
  protected readonly brand = brand;
  readonly link = input('/');
  readonly clicked = output<void>();
}
