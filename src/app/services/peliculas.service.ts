import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  //peliculas: any[] = [];
  peliculas: any;

  private apiURL = "http://www.omdbapi.com/?";
  private apikey = "&apikey=55e648c1";
 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) {
    this.cargarStoragePeliculas();
   }



  find(nombrePelicula): Observable<any> {

    let url = this.apiURL + 's=' + nombrePelicula;
    url += this.apikey;

    return this.httpClient.get<any>(url)
    .pipe(
      catchError(this.errorHandler)
    )
  }



  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }


 cargarStoragePeliculas() {
  if (localStorage.getItem('peliculas')) {
    this.peliculas = JSON.parse(localStorage.getItem('peliculas'));
  } else {
    this.peliculas = null;
  }
 }


 guardarStoragePeliculas(pelicula)
 {
  this.peliculas = this.peliculas.push(pelicula);
  console.log('this.peliculas',this.peliculas);
   localStorage.setItem('peliculas', JSON.stringify(pelicula));
 }


}
