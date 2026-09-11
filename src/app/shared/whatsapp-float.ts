import { Component, input } from '@angular/core';
import { WhatsappIcon } from './whatsapp-icon';

@Component({
  selector: 'app-whatsapp-float',
  imports: [WhatsappIcon],
  template: `
    <a
      [href]="href()"
      target="_blank"
      rel="noopener noreferrer"
      class="fixed right-5 bottom-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-[0_12px_30px_rgba(37,211,102,0.4)] transition hover:scale-105"
      aria-label="Abrir conversa no WhatsApp"
    >
      <app-whatsapp-icon cssClass="h-7 w-7" />
    </a>
  `,
})
export class WhatsappFloat {
  readonly href = input.required<string>();
}
