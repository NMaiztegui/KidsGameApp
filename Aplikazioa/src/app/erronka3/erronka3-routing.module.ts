import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Erronka3Page } from './erronka3.page';

const routes: Routes = [
  {
    path: '',
    component: Erronka3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Erronka3PageRoutingModule {}
