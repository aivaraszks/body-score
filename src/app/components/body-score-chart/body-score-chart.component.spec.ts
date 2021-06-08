import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyScoreChartComponent } from './body-score-chart.component';

describe('BodyScoreChartComponent', () => {
  let component: BodyScoreChartComponent;
  let fixture: ComponentFixture<BodyScoreChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyScoreChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyScoreChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
