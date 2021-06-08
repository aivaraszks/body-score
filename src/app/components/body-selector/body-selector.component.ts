import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUser } from 'src/app/actions/score.actions';
import { ScoreState } from 'src/app/reducers/score.reducer';

@Component({
  selector: 'app-body-selector',
  templateUrl: './body-selector.component.html',
  styleUrls: ['./body-selector.component.css'],
})
export class BodySelectorComponent implements OnInit {
  scoreState$: Observable<ScoreState>;

  constructor(private store: Store<{ score: ScoreState }>) {
    this.scoreState$ = store.select('score');
  }

  ngOnInit(): void {}

  selectUser(userId: any) {
    this.store.dispatch(selectUser({ userId: userId }));
  }
}
