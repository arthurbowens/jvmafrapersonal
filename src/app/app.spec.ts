import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { CapturaPage } from './pages/captura/captura';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render captura hero headline', async () => {
    const fixture = TestBed.createComponent(CapturaPage);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('magra');
    expect(compiled.querySelector('h1')?.textContent).toContain('definida');
    expect(compiled.querySelector('h1')?.textContent).toContain('poderosa');
  });

  it('should send every CTA to WhatsApp on captura page', async () => {
    const fixture = TestBed.createComponent(CapturaPage);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const ctas = [...compiled.querySelectorAll('a[href*="wa.me"]')];
    expect(ctas.length).toBeGreaterThan(0);
    expect(ctas.every((link) => link.getAttribute('href')?.startsWith('https://wa.me/'))).toBe(true);
  });
});
