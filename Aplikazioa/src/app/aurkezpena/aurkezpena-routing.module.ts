import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AurkezpenaPage } from './aurkezpena.page';

const routes: Routes = [
  {
    path: '',
    component: AurkezpenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AurkezpenaPageRoutingModule {}
