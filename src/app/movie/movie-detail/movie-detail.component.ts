import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from './../services/movie.service';
import { Subscription } from 'rxjs';
import { Movie } from '../models/movie.model';
import { NavbarService } from 'src/app/navbar/services/navbar.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnDestroy {

  id: number;
  movie: Movie;
  movieSub$: Subscription;

  constructor(
    private movieService: MovieService,
    private navbarService: NavbarService, 
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.movieSub$ = this.movieService.movie(this.id).subscribe(movie => {
        this.movie = movie;
        this.navbarService.title.next(movie.name);
      });
  }

  ngOnDestroy(): void {
    this.movieSub$.unsubscribe();
  }
}
