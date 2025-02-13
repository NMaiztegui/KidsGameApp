import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestuaPageRoutingModule } from './testua-routing.module';

import { TestuaPage } from './testua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestuaPageRoutingModule
  ],
  declarations: [TestuaPage]
})
export class TestuaPageModule {}
