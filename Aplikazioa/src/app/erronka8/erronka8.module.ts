import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Erronka8PageRoutingModule } from './erronka8-routing.module';

import { Erronka8Page } from './erronka8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Erronka8PageRoutingModule
  ],
  declarations: [Erronka8Page]
})
export class Erronka8PageModule {}
