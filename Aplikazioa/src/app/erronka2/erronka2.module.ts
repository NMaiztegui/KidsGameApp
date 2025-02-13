import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Erronka2PageRoutingModule } from './erronka2-routing.module';

import { Erronka2Page } from './erronka2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Erronka2PageRoutingModule
  ],
  declarations: [Erronka2Page]
})
export class Erronka2PageModule {}
