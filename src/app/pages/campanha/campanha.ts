import { Component, inject } from '@angular/core';
import { brand } from '../../core/brand';
import { WhatsappService } from '../../core/whatsapp.service';
import { SiteFooter } from '../../shared/site-footer';
import { SiteHeader } from '../../shared/site-header';
import { WhatsappFloat } from '../../shared/whatsapp-float';
import { WhatsappIcon } from '../../shared/whatsapp-icon';

@Component({
  selector: 'app-campanha-page',
  imports: [SiteHeader, SiteFooter, WhatsappFloat, WhatsappIcon],
  templateUrl: './campanha.html',
})
export class CampanhaPage {
  private readonly whatsapp = inject(WhatsappService);

  protected readonly brand = brand;
  protected readonly defaultMessage =
    'Oi, Mafra Team! Quero entrar na Lista VIP e garantir minha vaga com condição especial.';

  protected readonly nav = [
    { label: 'A oferta', href: '#oferta' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Como funciona', href: '#passos' },
  ];

  protected readonly perks = [
    {
      title: 'Condição exclusiva',
      text: 'Quem entra na lista recebe acesso antes do público, com valor diferenciado.',
      accent: 'orange',
    },
    {
      title: 'Prioridade no atendimento',
      text: 'Suas mensagens entram na fila VIP. Resposta rápida e acompanhamento de perto.',
      accent: 'blue',
    },
    {
      title: 'Vagas limitadas',
      text: 'Poucas vagas por mês para manter a qualidade. Lista VIP garante sua chance.',
      accent: 'orange',
    },
    {
      title: 'Treino feminino de elite',
      text: 'Protocolo para ficar magra, definida e poderosa. Método testado com +200 ativas.',
      accent: 'blue',
    },
  ];

  protected readonly steps = [
    'Entre na Lista VIP pelo WhatsApp',
    'Receba a condição especial antes de todo mundo',
    'Garanta sua vaga na Consultoria Mafra Team',
    'Comece o protocolo com a Mafra Team',
  ];

  protected whatsappUrl(message = this.defaultMessage): string {
    return this.whatsapp.url(message);
  }
}
