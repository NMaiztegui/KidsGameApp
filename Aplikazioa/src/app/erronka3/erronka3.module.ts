import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Erronka3PageRoutingModule } from './erronka3-routing.module';

import { Erronka3Page } from './erronka3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Erronka3PageRoutingModule
  ],
  declarations: [Erronka3Page]
})
export class Erronka3PageModule {}
