import { Component, OnInit } from '@angular/core';
import { Joke } from './joke';
import { Observable } from 'rxjs';
import { JokeService } from './joke.service';
import { Memoize } from 'lodash-decorators';
import { take, mergeMap, skip, mapTo, switchMap } from 'rxjs/operators';
import { Subject, merge } from 'rxjs';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent implements OnInit {
  jokes$: Observable<Array<Joke>>;
  // [V3]
  update$ = new Subject<void>();
  showNotification$: Observable<boolean>;
  // [V4]
  forceReload$ = new Subject<void>();

  constructor(private jokeService: JokeService) { }

  ngOnInit() {
    // [V1]
    // this.jokes$ = this.jokeService.jokes;

    // [V3]
    // const initialNotifications$ = this.jokeService.jokes.pipe(skip(1));
    // const show$ = initialNotifications$.pipe(mapTo(true));
    // const hide$ = this.update$.pipe(mapTo(false));
    // this.showNotification$ = merge(show$, hide$);

    // const initialJokes$ = this.getDataOnce();
    // const updates$ = this.update$.pipe(
    //   mergeMap(() => this.getDataOnce()),
    //   x => { console.log('[POUET] refreshing'); return x; }
    // );
    // this.jokes$ = merge(initialJokes$, updates$);

    // [V4]
    const reload$ = this.forceReload$.pipe(switchMap(() => this.getNotifications()));
    const initialNotifications$ = this.getNotifications();
    const show$ = merge(initialNotifications$, reload$).pipe(mapTo(true));
    const hide$ = this.update$.pipe(mapTo(false));
    this.showNotification$ = merge(show$, hide$);

    const initialJokes$ = this.getDataOnce();
    const updates$ = merge(this.update$, this.forceReload$).pipe(
      mergeMap(() => this.getDataOnce()),
      x => { console.log('[POUET] refreshing'); return x; }
    );
    this.jokes$ = merge(initialJokes$, updates$);
  }

  // [V3]: notify new jokes
  getDataOnce() {
    return this.jokeService.jokes.pipe(take(1));
  }

  @Memoize()
  getVotes(id: number): number {
    return Math.floor(10 + Math.random() * (100 - 10));
  }

  // [V4]
  forceReload(): void {
    this.jokeService.forceReload();
    this.forceReload$.next();
  }

  //  [V4]
  getNotifications(): Observable<Joke[]> {
    return this.jokeService.jokes.pipe(skip(1));
  }
}
