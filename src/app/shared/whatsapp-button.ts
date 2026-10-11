import { Component, computed, input } from '@angular/core';
import { WhatsappIcon } from './whatsapp-icon';

export type WhatsappButtonVariant = 'solid' | 'outline' | 'compact' | 'large';

@Component({
  selector: 'app-whatsapp-button',
  imports: [WhatsappIcon],
  host: { class: 'inline-flex max-w-full' },
  template: `
    <a [href]="href()" target="_blank" rel="noopener noreferrer" [class]="classList()">
      <app-whatsapp-icon />
      <span class="text-center"><ng-content /></span>
    </a>
  `,
})
export class WhatsappButton {
  readonly href = input.required<string>();
  readonly variant = input<WhatsappButtonVariant>('solid');
  readonly fullWidth = input(false);

  protected readonly classList = computed(() => {
    const base = 'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition';
    const width = this.fullWidth() ? ' w-full' : '';

    switch (this.variant()) {
      case 'outline':
        return `${base}${width} btn-whatsapp-outline px-7 py-3.5 text-sm text-white`;
      case 'compact':
        return `${base}${width} btn-whatsapp px-5 py-2.5 text-sm text-white`;
      case 'large':
        return `${base}${width} btn-whatsapp px-8 py-4 text-sm font-bold uppercase tracking-wide text-white`;
      default:
        return `${base}${width} btn-whatsapp px-7 py-3.5 text-sm text-white`;
    }
  });
}
