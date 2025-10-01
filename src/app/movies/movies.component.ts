import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_CARD_DIRECTIVES, IGX_CAROUSEL_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_LIST_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_TABS_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxRippleDirective } from 'igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { MovieListType } from '../models/movie-app/movie-list-type';
import { NowPlayingType } from '../models/movie-app/now-playing-type';
import { ShowtimesType } from '../models/movie-app/showtimes-type';
import { TheatresNearYouType } from '../models/movie-app/theatres-near-you-type';
import { TheatresType } from '../models/movie-app/theatres-type';
import { MovieAppService } from '../services/movie-app.service';

@Component({
  selector: 'app-movies',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES, IGX_CAROUSEL_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_TABS_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxIconButtonDirective, IgxButtonDirective, IgxRippleDirective, IgxIconComponent, IgxAvatarComponent, FormsModule],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public value: string = '1';
  public value1: string = '1';
  public value2: string = '1';
  public movieAppNowPlaying: NowPlayingType[] = [];
  public movieAppMovieList: MovieListType[] = [];
  public movieAppTheatres: TheatresType[] = [];
  public movieAppShowtimes: ShowtimesType[] = [];
  public movieAppTheatresNearYou: TheatresNearYouType[] = [];

  constructor(
    private movieAppService: MovieAppService,
  ) {}


  ngOnInit() {
    this.movieAppService.getNowPlayingList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.movieAppNowPlaying = data
    );
    this.movieAppService.getMovieListList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.movieAppMovieList = data
    );
    this.movieAppService.getTheatresList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.movieAppTheatres = data
    );
    this.movieAppService.getShowtimesList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.movieAppShowtimes = data
    );
    this.movieAppService.getTheatresNearYouList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.movieAppTheatresNearYou = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
