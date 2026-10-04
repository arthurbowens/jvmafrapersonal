import { Component, inject } from '@angular/core';
import { brand } from '../../core/brand';
import { WhatsappService } from '../../core/whatsapp.service';
import { SiteFooter } from '../../shared/site-footer';
import { SiteHeader } from '../../shared/site-header';
import { WhatsappFloat } from '../../shared/whatsapp-float';
import { WhatsappIcon } from '../../shared/whatsapp-icon';

@Component({
  selector: 'app-captura-page',
  imports: [SiteHeader, SiteFooter, WhatsappFloat, WhatsappIcon],
  templateUrl: './captura.html',
})
export class CapturaPage {
  private readonly whatsapp = inject(WhatsappService);

  protected readonly brand = brand;
  protected readonly defaultMessage =
    'Oi, Mafra Team! Quero o acompanhamento e ficar mais magra, definida e poderosa.';

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
      title: 'Você fala. Nós lemos o seu corpo.',
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
      title: 'WhatsApp aberto + feedback mensal',
      text: 'Todo mês, feedback com avaliação física da consultoria para comparativos. Entre os feedbacks, você tira dúvidas e envia vídeos de execução quando quiser.',
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
      q: 'Como funciona o feedback?',
      a: 'Todo mês realizamos feedback com avaliação física proposta na consultoria, para comparativos de evolução. Entre os feedbacks, o WhatsApp fica aberto para dúvidas, vídeos de execução e ajustes quando você precisar.',
    },
    {
      q: 'O WhatsApp é com a equipe ou com robô?',
      a: 'É com a Mafra Team. Acompanhamento humano, direto e focado no seu resultado.',
    },
    {
      q: 'Tenho dor, pós-parto ou restrição. Posso entrar?',
      a: 'Pode. Adaptamos o protocolo para você treinar, evoluir e se machucar menos.',
    },
  ];

  protected whatsappUrl(message = this.defaultMessage): string {
    return this.whatsapp.url(message);
  }
}
