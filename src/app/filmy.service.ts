import { Injectable } from '@angular/core';
import { Film } from './modele/film';

@Injectable({
  providedIn: 'root'
})
export class FilmyService {

  private filmy: Film[] = [
    { id: 0, tytul: 'Titanic', opis: 'Rok 1912, brytyjski statek titanic .... loreasdasd as dasd as', rok: 2012 },
    { id: 1, tytul: 'Terminator', opis: 'asdsf sa dsafdsf', rok: 2023 },
    { id: 2, tytul: 'Avatar', opis: 'Jasd, asdj, sad sfjdsfj sj saja jdsj idsi isd i', rok: 1990 },
  ];

  constructor() { }

  wszystkieFilmy(): Film[] {
    return this.filmy;
  }

  getFilm(id: number): Film {
    return this.filmy[id];
  }


}
