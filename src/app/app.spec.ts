import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the hero headline', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('magra');
    expect(compiled.querySelector('h1')?.textContent).toContain('definida');
    expect(compiled.querySelector('h1')?.textContent).toContain('poderosa');
  });

  it('should send every CTA to WhatsApp', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const ctas = [...compiled.querySelectorAll('a[href*="wa.me"]')];
    expect(ctas.length).toBeGreaterThan(0);
    expect(ctas.every((link) => link.getAttribute('href')?.startsWith('https://wa.me/'))).toBe(true);
  });
});
