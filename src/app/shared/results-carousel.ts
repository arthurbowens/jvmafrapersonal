import { Component, ElementRef, input, signal, viewChild } from '@angular/core';

export type ResultSlide = {
  src: string;
  alt: string;
};

@Component({
  selector: 'app-results-carousel',
  template: `
    <div class="relative">
      <p class="mb-4 flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45 lg:hidden">
        <svg class="h-4 w-4 text-blue-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8 12H4m0 0 4-4m-4 4 4 4m8-8h4m0 0-4-4m4 4-4 4" />
        </svg>
        Deslize com o dedo
      </p>

      <div class="relative">
        <button
          type="button"
          class="absolute top-1/2 left-0 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white backdrop-blur transition hover:border-orange hover:text-orange lg:flex"
          aria-label="Resultado anterior"
          (click)="scrollBy(-1)"
        >
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div
          #track
          class="results-track flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 pb-2 lg:px-12"
          (scroll)="onTrackScroll()"
        >
          @for (slide of slides(); track slide.src; let i = $index) {
            <figure
              class="snap-center shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-black shadow-[0_0_24px_rgba(0,119,255,0.12)] w-[min(88vw,22rem)] sm:w-[24rem]"
            >
              <img
                [src]="slide.src"
                [alt]="slide.alt"
                class="aspect-[4/5] w-full bg-black object-contain"
                width="960"
                height="1200"
                loading="lazy"
              />
              <figcaption class="flex items-center justify-between border-t border-white/10 px-4 py-3">
                <p class="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/55">Transformação real</p>
                <span class="rounded-full bg-orange/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-orange">
                  Antes / Depois
                </span>
              </figcaption>
            </figure>
          }
        </div>

        <button
          type="button"
          class="absolute top-1/2 right-0 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white backdrop-blur transition hover:border-orange hover:text-orange lg:flex"
          aria-label="Próximo resultado"
          (click)="scrollBy(1)"
        >
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div class="mt-6 flex flex-wrap items-center justify-center gap-2">
        @for (slide of slides(); track slide.src; let i = $index) {
          <button
            type="button"
            class="h-2.5 rounded-full transition-all"
            [class.w-2.5]="activeIndex() !== i"
            [class.bg-white/25]="activeIndex() !== i"
            [class.w-7]="activeIndex() === i"
            [class.bg-orange]="activeIndex() === i"
            [attr.aria-label]="'Ir para o resultado ' + (i + 1)"
            [attr.aria-current]="activeIndex() === i ? 'true' : null"
            (click)="scrollTo(i)"
          ></button>
        }
      </div>
    </div>
  `,
})
export class ResultsCarousel {
  readonly slides = input.required<ResultSlide[]>();

  private readonly track = viewChild<ElementRef<HTMLDivElement>>('track');
  protected readonly activeIndex = signal(0);

  protected scrollTo(index: number): void {
    const track = this.track()?.nativeElement;
    if (!track) return;

    const target = track.children.item(index) as HTMLElement | null;
    if (!target) return;

    target.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    this.activeIndex.set(index);
  }

  protected scrollBy(delta: number): void {
    const next = Math.min(Math.max(this.activeIndex() + delta, 0), this.slides().length - 1);
    this.scrollTo(next);
  }

  protected onTrackScroll(): void {
    const track = this.track()?.nativeElement;
    if (!track || track.children.length === 0) return;

    const midpoint = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    for (let i = 0; i < track.children.length; i++) {
      const slide = track.children[i] as HTMLElement;
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const distance = Math.abs(midpoint - slideCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = i;
      }
    }

    this.activeIndex.set(closest);
  }
}
