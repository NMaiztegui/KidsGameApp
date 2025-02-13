import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErronkaPageRoutingModule } from './erronka1-routing.module';

import { ErronkaPage } from './erronka1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErronkaPageRoutingModule
  ],
  declarations: [ErronkaPage]
})
export class ErronkaPageModule {}
