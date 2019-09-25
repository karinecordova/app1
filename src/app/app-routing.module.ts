import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
<<<<<<< HEAD
  },
  { path: 'maisvendidos', loadChildren: './maisvendidos/maisvendidos.module#MaisvendidosPageModule' },  { path: 'busca', loadChildren: './busca/busca.module#BuscaPageModule' }

=======
  }
>>>>>>> 80cf1dcab668a53b07c0ef766693bd53e88f01a2
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
