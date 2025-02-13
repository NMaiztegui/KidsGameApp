import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Erronka4Page } from './erronka4.page';

const routes: Routes = [
  {
    path: '',
    component: Erronka4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Erronka4PageRoutingModule {}
