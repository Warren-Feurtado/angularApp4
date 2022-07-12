import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { fakeMovies } from './fakeMovie';
import { Movie } from './Models/movie';
import { MessasgeService } from './messasge.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  getMovies(): Observable<Movie[]>{
    this.messageService.add(`${new Date().toLocaleString} - Movie List retrieved fromService`);
    return of (fakeMovies);
  }

  getMovieById(id: number): Observable<Movie | any>{
    return of (fakeMovies.find(theMovie => theMovie.id === id))
  }

  constructor(public messageService: MessasgeService) { }
}
