import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErronkaPage } from './erronka1.page';

const routes: Routes = [
  {
    path: '',
    component: ErronkaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErronkaPageRoutingModule {}
