import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Erronka7Page } from './erronka7.page';

const routes: Routes = [
  {
    path: '',
    component: Erronka7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Erronka7PageRoutingModule {}
