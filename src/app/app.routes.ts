import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/captura/captura').then((m) => m.CapturaPage),
    title: 'Mafra Team | Consultoria. Treinamento Feminino',
  },
  {
    path: 'campanha',
    loadComponent: () => import('./pages/campanha/campanha').then((m) => m.CampanhaPage),
    title: 'Lista VIP | Mafra Team',
  },
];
