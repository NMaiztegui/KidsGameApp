import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestuaPage } from './testua.page';

const routes: Routes = [
  {
    path: '',
    component: TestuaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestuaPageRoutingModule {}
