
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
    path: 'aurkezpena/:id',
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
  {
    path: 'erronka2',
    loadChildren: () => import('./erronka2/erronka2.module').then( m => m.Erronka2PageModule)
  },
  {
   path: 'erronka3',
    loadChildren: () => import('./erronka3/erronka3.module').then( m => m.Erronka3PageModule)
  },
  {
    path: 'erronka4',
    loadChildren: () => import('./erronka4/erronka4.module').then( m => m.Erronka4PageModule)
  },
  {
    path: 'erronka5',
    loadChildren: () => import('./erronka5/erronka5.module').then( m => m.Erronka5PageModule)
  },
  {
    path: 'erronka6',
    loadChildren: () => import('./erronka6/erronka6.module').then( m => m.Erronka6PageModule)
  },
  {
    path: 'erronka7',
    loadChildren: () => import('./erronka7/erronka7.module').then( m => m.Erronka7PageModule)
  },
  {
    path: 'erronka8',
    loadChildren: () => import('./erronka8/erronka8.module').then( m => m.Erronka8PageModule)
  },
];
   

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
