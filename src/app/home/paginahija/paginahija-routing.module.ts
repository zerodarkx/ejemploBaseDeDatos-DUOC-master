import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginahijaPage } from './paginahija.page';

const routes: Routes = [
  {
    path: '',
    component: PaginahijaPage
  },
  {
    path: 'hija',
    loadChildren: () => import('./paginahija2/paginahija2.module').then( m => m.Paginahija2PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginahijaPageRoutingModule {}
