import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Erronka2Page } from './erronka2.page';

const routes: Routes = [
  {
    path: '',
    component: Erronka2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Erronka2PageRoutingModule {}
