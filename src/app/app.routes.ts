import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/captura/captura').then((m) => m.CapturaPage),
    title: 'João Victor Mafra | Personal Trainer. Treinamento Feminino',
  },
  {
    path: 'campanha',
    loadComponent: () => import('./pages/campanha/campanha').then((m) => m.CampanhaPage),
    title: 'Lista VIP | João Victor Mafra',
  },
];
