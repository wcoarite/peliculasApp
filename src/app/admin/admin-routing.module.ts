import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PeliculaComponent } from './pelicula/pelicula.component';

const routes: Routes = [
  {
    path: '',
    component: PeliculasComponent
  },
  
  {
    path: 'peliculas',
    component: PeliculasComponent
  },
  
  {
    path: 'pelicula/:id',
    component: PeliculaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
