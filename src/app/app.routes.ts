import { Routes } from '@angular/router';

// widoki ładowane leniwie — w początkowym bundlu zostaje tylko szkielet aplikacji
export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/home/home').then((m) => m.Home) },
  { path: 'room/:code', loadComponent: () => import('./components/room/room').then((m) => m.Room) },
  { path: '**', redirectTo: '' },
];
