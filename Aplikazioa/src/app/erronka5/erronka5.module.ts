import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Erronka5PageRoutingModule } from './erronka5-routing.module';

import { Erronka5Page } from './erronka5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Erronka5PageRoutingModule
  ],
  declarations: [Erronka5Page]
})
export class Erronka5PageModule {}
