import { Component, OnInit, ViewChild } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
//import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  peliculas = [];
  temp = [];

  // @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(
    public _peliculaService: PeliculasService
  ) { }

  ngOnInit(): void {

    console.log('ingresadnooooo.....');
    this.cargarPeliculas("star wars");
  }



  cargarPeliculas(busqueda:string): void {
    this._peliculaService.find(busqueda)
      .subscribe(
        data => {

         this.peliculas = data.Search;
        console.log('carga peliculas',this.peliculas);
        },
        error => {
          console.log(error);
        });
  }



  updateFilter(event) {
    
    const val = event.target.value.toLowerCase();
    this.cargarPeliculas(val);


  }


  adicionarFavorito(obj)
  {
    this._peliculaService.guardarStoragePeliculas(obj);
    console.log('peliculas.....',this._peliculaService.peliculas);
  }

}
