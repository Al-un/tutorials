import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // template: `
  // <p>This is my inline template HTML!</p>
  // `,
  styleUrls: ['./home.component.scss'],

  animations: [

    trigger('goals', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
          ]))
        ]), { optional: true }),

        query(':leave', stagger('300ms', [
          animate('.6s ease-out', keyframes([
            style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 0, transform: 'translateY(-75px)', offset: 1.0 }),
          ]))
        ]), { optional: true })
      ])
    ])

  ]
})
export class HomeComponent implements OnInit {

  itemCount = 4; // type inferred
  btnText = 'Add an Item';
  goalText = 'My first life goal';
  // goals: string[] = ['My first life goal', 'I want to climb a mountain', 'Go ice skiing'];
  goals: string[] = [];

  constructor(private _data: DataService) {

  }

  ngOnInit() {
    this.itemCount = this.goals.length;
    this._data.goal.subscribe(res => this.goals = res);
    this._data.changeGoal(this.goals);
  }

  addItem() {
    if (this.goalText !== '') {
      this.goals.push(this.goalText);
      this.goalText = '';
      this.itemCount = this.goals.length;
      this._data.changeGoal(this.goals);
    }
  }

  removeItem(i) {
    this.goals.splice(i, 1);
    this._data.changeGoal(this.goals);
  }
}