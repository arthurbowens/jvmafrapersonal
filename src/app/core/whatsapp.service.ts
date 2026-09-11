import { Injectable } from '@angular/core';
import { brand } from './brand';

@Injectable({ providedIn: 'root' })
export class WhatsappService {
  url(message: string): string {
    return `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }
}
