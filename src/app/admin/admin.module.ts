import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PeliculaComponent } from './pelicula/pelicula.component';

// import { NgxDatatableModule } from '@swimlane/ngx-datatable';



@NgModule({
  declarations: 
  [PeliculasComponent, 
    PeliculaComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    // NgxDatatableModule,
    //FormsModule,
    //ReactiveFormsModule,
  ]
})
export class AdminModule { }
