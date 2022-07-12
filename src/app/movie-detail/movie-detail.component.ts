import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../Models/movie';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})


export class MovieDetailComponent implements OnInit {

  @Input() movie!: Movie;

  getaMovieFromParam(): void{
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.movieService.getMovieById(id).subscribe(theMovie => this.movie = theMovie);
  }

  goBack(): void{
    this.location.back;
  }

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.getaMovieFromParam();
  }

}
