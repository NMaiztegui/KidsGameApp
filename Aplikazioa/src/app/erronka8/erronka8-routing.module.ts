import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Erronka8Page } from './erronka8.page';

const routes: Routes = [
  {
    path: '',
    component: Erronka8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Erronka8PageRoutingModule {}
