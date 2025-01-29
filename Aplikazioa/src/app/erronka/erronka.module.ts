import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErronkaPageRoutingModule } from './erronka-routing.module';

import { ErronkaPage } from './erronka.page';

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
