import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Erronka7PageRoutingModule } from './erronka7-routing.module';

import { Erronka7Page } from './erronka7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Erronka7PageRoutingModule
  ],
  declarations: [Erronka7Page]
})
export class Erronka7PageModule {}
