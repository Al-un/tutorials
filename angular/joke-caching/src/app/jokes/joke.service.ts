import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Joke, JokeResponse } from './joke';
import { Observable, Subject } from 'rxjs';
import { shareReplay, map, switchMap, takeUntil } from 'rxjs/operators';
import { timer } from 'rxjs/';

const REFRESH_INTERVAL = 10000;
const API_ENDPOINT = 'https://api.icndb.com/jokes/random/5?limitTo=[nerdy]';
const CACHE_SIZE = 1;

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  // [V1]
  private cache$: Observable<Array<Joke>>;
  // [V4]: forcing reload
  private reload$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  get jokes(): Observable<Array<Joke>> {
    if (!this.cache$) {
      console.log('[POUET] cache$ `null`. Fetching data');
      // [V1] ------------------------------------------
      // console.log('[POUET] cache$ is null. Fetching data!');
      // this.cache$ = this.requestJokes().pipe(
      //   shareReplay(CACHE_SIZE)
      // );

      // [V2] ------------------------------------------
      // Set up timer that ticks every X milliseconds
      const timer$ = timer(0, REFRESH_INTERVAL);
      // For each tick make an http request to fetch new data
      this.cache$ = timer$.pipe(
        x => { console.log('[POUET] ' + new Date() + ' timer update'); return x; },
        switchMap(_ => this.requestJokes()),
        takeUntil(this.reload$), // [V4]
        shareReplay(CACHE_SIZE)
      );
    }

    console.log('[POUET] Returning from cache');
    return this.cache$;
  }

  private requestJokes(): Observable<Array<Joke>> {
    return this.http.get<JokeResponse>(API_ENDPOINT).pipe(
      map(response => response.value)
    );
  }

  // [V4]
  forceReload(): void {
    console.log('[POUET] forceReload()');
    // Calling next will complete the current cache instance
    this.reload$.next();

    // Setting the cache to null will create a new cache the
    // next time 'jokes' is called
    this.cache$ = null;
  }
}
