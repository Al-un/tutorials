import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<string[]>(['The initial goal', 'Another silly life goal']);
  goal: Observable<string[]> = this.goals.asObservable();

  constructor() { }

  changeGoal(goal: string[]) {
    this.goals.next(goal);
  }

}
