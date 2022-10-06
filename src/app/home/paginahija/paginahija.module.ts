import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginahijaPageRoutingModule } from './paginahija-routing.module';

import { PaginahijaPage } from './paginahija.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginahijaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PaginahijaPage]
})
export class PaginahijaPageModule {}
