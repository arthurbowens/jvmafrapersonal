import { Component, input } from '@angular/core';
import { brand } from '../core/brand';
import { WhatsappButton } from './whatsapp-button';

@Component({
  selector: 'app-site-footer',
  imports: [WhatsappButton],
  template: `
    <footer class="border-t border-white/10">
      <div
        class="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between lg:px-8"
      >
        <p>{{ brand.name }}. {{ brand.subtitle }}.</p>
        <app-whatsapp-button [href]="whatsappHref()" variant="compact">
          {{ ctaLabel() }}
        </app-whatsapp-button>
      </div>
    </footer>
  `,
})
export class SiteFooter {
  protected readonly brand = brand;
  readonly whatsappHref = input.required<string>();
  readonly ctaLabel = input('Chamar no WhatsApp');
}
