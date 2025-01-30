import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'aurkezpena',
    loadChildren: () => import('./aurkezpena/aurkezpena.module').then( m => m.AurkezpenaPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'testua',
    loadChildren: () => import('./testua/testua.module').then( m => m.TestuaPageModule)
  },
  {
    path: 'erronka1',
    loadChildren: () => import('./erronka1/erronka1.module').then( m => m.ErronkaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
