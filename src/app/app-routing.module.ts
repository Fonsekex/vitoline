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
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'video-detalle/:id/:iddos/:padre/:num',
    loadChildren: () => import('./pages/video-detalle/video-detalle.module').then( m => m.VideoDetallePageModule)
  },
  {
    path: 'quienes-somos/:id',
    loadChildren: () => import('./pages/quienes-somos/quienes-somos.module').then( m => m.QuienesSomosPageModule)
  },
  {
    path: 'talento-pantalla/:id',
    loadChildren: () => import('./pages/talento-pantalla/talento-pantalla.module').then( m => m.TalentoPantallaPageModule)
  },
  {
    path: 'persona-detalle-uno/:presentador',
    loadChildren: () => import('./pages/persona-detalle-uno/persona-detalle-uno.module').then( m => m.PersonaDetalleUnoPageModule)
  },
  {
    path: 'programa/:id',
    loadChildren: () => import('./pages/programa/programa.module').then( m => m.ProgramaPageModule)
  },
  {
    path: 'categoria/:id',
    loadChildren: () => import('./pages/categoria/categoria.module').then( m => m.CategoriaPageModule)
  },
  {
    path: 'buscar',
    loadChildren: () => import('./pages/buscar/buscar.module').then( m => m.BuscarPageModule)
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./pages/favoritos/favoritos.module').then( m => m.FavoritosPageModule)
  },
  {
    path: 'programacion/:id',
    loadChildren: () => import('./pages/programacion/programacion.module').then( m => m.ProgramacionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
