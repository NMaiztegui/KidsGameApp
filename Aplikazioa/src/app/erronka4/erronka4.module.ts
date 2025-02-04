import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Erronka4PageRoutingModule } from './erronka4-routing.module';

import { Erronka4Page } from './erronka4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Erronka4PageRoutingModule
  ],
  declarations: [Erronka4Page]
})
export class Erronka4PageModule {}
