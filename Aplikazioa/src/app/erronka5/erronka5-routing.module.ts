import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Erronka5Page } from './erronka5.page';

const routes: Routes = [
  {
    path: '',
    component: Erronka5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Erronka5PageRoutingModule {}
