export class Measurement {
  id: string | undefined;
  userId: string | undefined;
  bodyScore: Score | undefined;
  muscleScore: Score | undefined;
  fatScore: Score | undefined;
}

export class Score {
  value: string | undefined;
  trend: ScoreTrend | undefined;
}

export enum ScoreTrend {
  Up = 'Up',
  Down = 'Down',
}
