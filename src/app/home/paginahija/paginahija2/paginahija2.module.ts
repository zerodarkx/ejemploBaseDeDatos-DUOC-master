import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Paginahija2PageRoutingModule } from './paginahija2-routing.module';

import { Paginahija2Page } from './paginahija2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Paginahija2PageRoutingModule
  ],
  declarations: [Paginahija2Page]
})
export class Paginahija2PageModule {}
