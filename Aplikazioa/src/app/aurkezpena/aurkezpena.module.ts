import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AurkezpenaPageRoutingModule } from './aurkezpena-routing.module';

import { AurkezpenaPage } from './aurkezpena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AurkezpenaPageRoutingModule
  ],
  declarations: [AurkezpenaPage]
})
export class AurkezpenaPageModule {}
