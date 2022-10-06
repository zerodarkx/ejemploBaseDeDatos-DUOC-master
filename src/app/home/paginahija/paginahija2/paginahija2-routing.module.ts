import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Paginahija2Page } from './paginahija2.page';

const routes: Routes = [
  {
    path: '',
    component: Paginahija2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Paginahija2PageRoutingModule {}
