import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Erronka6Page } from './erronka6.page';

const routes: Routes = [
  {
    path: '',
    component: Erronka6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Erronka6PageRoutingModule {}
