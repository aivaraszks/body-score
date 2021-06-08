import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BodySelectorComponent } from './components/body-selector/body-selector.component';
import { BodyScoreChartComponent } from './components/body-score-chart/body-score-chart.component';
import { StoreModule } from '@ngrx/store';
import { scoreReducer } from './reducers/score.reducer';

@NgModule({
  declarations: [AppComponent, BodySelectorComponent, BodyScoreChartComponent],
  imports: [BrowserModule, StoreModule.forRoot({ score: scoreReducer })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
