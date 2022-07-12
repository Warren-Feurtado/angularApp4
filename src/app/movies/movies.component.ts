import { Component, OnInit } from '@angular/core';
import { Movie } from '../Models/movie';
import { MovieService } from '../movie.service';
import { fakeMovies } from '../fakeMovie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movie: Movie = {
    id: 1,
    name: "The Sea Beast",
    description: "The life of a legendary sea Monster Hunter is turned upside down when a young girl stows away on his ship.",
    releaseYear: 2022,
    image: ""
  }
  
  movies = fakeMovies;
  selectedMovie!: Movie;

  onSelectMovie(movie: Movie): void{
    this.selectedMovie = movie;
    console.log(`this.selectedMovie is ${JSON.stringify(this.selectedMovie)}`)
  }

  constructor(public movieService: MovieService) { }

  ngOnInit(): void {
  }

}
