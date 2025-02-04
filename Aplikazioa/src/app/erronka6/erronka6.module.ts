import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Erronka6PageRoutingModule } from './erronka6-routing.module';

import { Erronka6Page } from './erronka6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Erronka6PageRoutingModule
  ],
  declarations: [Erronka6Page]
})
export class Erronka6PageModule {}
