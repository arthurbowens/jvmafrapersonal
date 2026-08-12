import { Component, HostListener, signal } from '@angular/core';
import { WhatsappIcon } from './whatsapp-icon';

@Component({
  selector: 'app-root',
  imports: [WhatsappIcon],
  templateUrl: './app.html',
})
export class App {
  protected readonly menuOpen = signal(false);

  /** Substitua pelo número real com DDI + DDD, só dígitos. Ex: 5511999999999 */
  private readonly whatsappNumber = '5511999999999';

  protected readonly defaultMessage =
    'Oi João! Quero o acompanhamento e ficar mais magra, definida e poderosa.';

  protected readonly nav = [
    { label: 'Início', href: '#inicio' },
    { label: 'Método', href: '#metodo' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Dúvidas', href: '#duvidas' },
  ];

  protected readonly benefits = [
    {
      title: 'Magra',
      text: 'Gordura para baixo, curva no lugar. Emagrece e continua mulher.',
      icon: 'flame',
    },
    {
      title: 'Definida',
      text: 'Cintura marcada, glúteo alto, abdômen limpo. O treino que aparece na foto.',
      icon: 'target',
    },
    {
      title: 'Poderosa',
      text: 'Roupa justa, olhar diferente, confiança que ninguém tira de você.',
      icon: 'bolt',
    },
  ];

  protected readonly method = [
    {
      step: '01',
      title: 'Você fala. Eu leio o seu corpo.',
      text: 'Rotina, histórico e o físico que você quer. Sem achismo. Sem treino de internet.',
      icon: 'clipboard',
    },
    {
      step: '02',
      title: 'Treino feito só para você',
      text: 'Zero planilha padrão. Cada exercício tem um motivo e um destino no seu corpo.',
      icon: 'dumbbell',
    },
    {
      step: '03',
      title: 'Eu no seu WhatsApp toda semana',
      text: 'Correção, ajuste de carga e resposta rápida. Você não treina sozinha.',
      icon: 'chat',
    },
    {
      step: '04',
      title: 'Resultado que fica no espelho',
      text: 'Progressão de verdade. Corpo definido que você sustenta, não efeito de 15 dias.',
      icon: 'trophy',
    },
  ];

  protected readonly resultSlots = [
    { label: 'Aluna 01', note: 'Antes e depois' },
    { label: 'Aluna 02', note: 'Antes e depois' },
    { label: 'Aluna 03', note: 'Antes e depois' },
  ];

  protected readonly faqs = [
    {
      q: 'Serve para quem nunca treinou direito?',
      a: 'Serve. Você começa do seu nível e sobe com segurança. Iniciante também conquista corpo marcado.',
    },
    {
      q: 'Tenho pouco tempo. Ainda dá resultado?',
      a: 'Dá. O treino entra na semana que você tem. Curto, certeiro e impossível de enrolar.',
    },
    {
      q: 'O WhatsApp é com você ou com uma equipe?',
      a: 'Comigo. Dúvida, vídeo da execução, ajuste de carga: você fala direto com o João.',
    },
    {
      q: 'Tenho dor, pós-parto ou restrição. Posso entrar?',
      a: 'Pode. Eu adapto o protocolo para você treinar, evoluir e se machucar menos.',
    },
  ];

  protected whatsappUrl(message = this.defaultMessage): string {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

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
