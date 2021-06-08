import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Measurement } from 'src/app/models/measurement';
import { ScoreState } from 'src/app/reducers/score.reducer';
@Component({
  selector: 'app-body-score-chart',
  templateUrl: './body-score-chart.component.html',
  styleUrls: ['./body-score-chart.component.css'],
})
export class BodyScoreChartComponent implements OnInit {
  // TODO: ??? Set type (nullable)
  selectedUserMeasurements: any = {};

  constructor(private store: Store<{ score: ScoreState }>) {
    this.store.select('score').subscribe((scoreState) => {
      this.selectedUserMeasurements = scoreState.measurements.find((measurement) => {
        return measurement.userId == scoreState.selectedUserId;
      });
    });
  }

  ngOnInit(): void {}
}
