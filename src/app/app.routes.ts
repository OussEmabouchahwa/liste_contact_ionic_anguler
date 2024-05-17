import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'edition/:id',
    loadComponent: () =>
      import('./pages/edition/edition.page').then((m) => m.EditionPage),
  },
  {
    path: 'ajout',
    loadComponent: () =>
      import('./pages/ajout/ajout.page').then((m) => m.AjoutPage),
  },
];
