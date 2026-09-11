import { Component, HostListener, input, signal } from '@angular/core';
import { Logo } from './logo';
import { WhatsappIcon } from './whatsapp-icon';

export type NavItem = { label: string; href: string };

@Component({
  selector: 'app-site-header',
  imports: [Logo, WhatsappIcon],
  template: `
    <header class="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/85 backdrop-blur-xl">
      <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:h-[4.5rem] lg:px-8">
        <app-logo [link]="logoLink()" (clicked)="closeMenu()" />

        <nav class="hidden items-center gap-8 lg:flex" aria-label="Principal">
          @for (item of nav(); track item.href) {
            <a [href]="item.href" class="text-sm text-white/60 transition hover:text-white">{{ item.label }}</a>
          }
          <a
            [href]="ctaHref()"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-orange inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-black"
          >
            <app-whatsapp-icon />
            {{ ctaLabel() }}
          </a>
        </nav>

        <button
          type="button"
          class="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white lg:hidden"
          [attr.aria-expanded]="menuOpen()"
          aria-controls="menu-mobile"
          aria-label="Abrir menu"
          (click)="toggleMenu()"
        >
          @if (!menuOpen()) {
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          } @else {
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path stroke-linecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          }
        </button>
      </div>
    </header>

    @if (menuOpen()) {
      <div class="fixed inset-0 z-30 bg-black/75 lg:hidden" (click)="closeMenu()" aria-hidden="true"></div>
    }

    <nav
      id="menu-mobile"
      class="fixed top-16 right-0 z-40 flex h-[calc(100dvh-4rem)] w-[min(22rem,88vw)] flex-col gap-2 border-l border-white/10 bg-surface px-6 py-8 transition-transform duration-300 lg:hidden"
      [class.translate-x-0]="menuOpen()"
      [class.translate-x-full]="!menuOpen()"
      [class.pointer-events-none]="!menuOpen()"
      [attr.aria-hidden]="!menuOpen()"
      aria-label="Menu mobile"
    >
      @for (item of nav(); track item.href) {
        <a
          [href]="item.href"
          class="rounded-xl px-3 py-3 text-lg text-white transition hover:bg-white/5"
          (click)="closeMenu()"
        >
          {{ item.label }}
        </a>
      }
      <a
        [href]="ctaHref()"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-orange mt-4 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold text-black"
        (click)="closeMenu()"
      >
        <app-whatsapp-icon />
        {{ ctaLabel() }}
      </a>
    </nav>
  `,
})
export class SiteHeader {
  readonly nav = input<NavItem[]>([]);
  readonly ctaHref = input.required<string>();
  readonly ctaLabel = input('Falar no WhatsApp');
  readonly logoLink = input('/');

  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.closeMenu();
  }
}
