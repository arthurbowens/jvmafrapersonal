import { Component, input } from '@angular/core';
import { brand } from '../core/brand';
import { WhatsappIcon } from './whatsapp-icon';

@Component({
  selector: 'app-site-footer',
  imports: [WhatsappIcon],
  template: `
    <footer class="border-t border-white/10">
      <div
        class="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between lg:px-8"
      >
        <p>{{ brand.name }}. {{ brand.subtitle }}.</p>
        <a
          [href]="whatsappHref()"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 text-blue-light transition hover:text-orange"
        >
          <app-whatsapp-icon />
          {{ ctaLabel() }}
        </a>
      </div>
    </footer>
  `,
})
export class SiteFooter {
  protected readonly brand = brand;
  readonly whatsappHref = input.required<string>();
  readonly ctaLabel = input('Chamar no WhatsApp');
}
