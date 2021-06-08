import { createReducer, on } from '@ngrx/store';
import { selectUser } from '../actions/score.actions';
import { Measurement, ScoreTrend } from '../models/measurement';
import { User } from '../models/user';

export interface ScoreState {
  selectedUserId: string;
  users: Array<User>;
  measurements: Array<Measurement>;
}

export const initialState: ScoreState = {
  selectedUserId: '1',
  users: [
    { id: '1', name: 'Bob' },
    { id: '2', name: 'John' },
  ],
  measurements: [
    {
      id: 'r432645ln2l3h6h7427',
      userId: '1',
      bodyScore: {
        value: '111',
        trend: ScoreTrend.Down,
      },
      muscleScore: {
        value: '75',
        trend: ScoreTrend.Down,
      },
      fatScore: {
        value: '36',
        trend: ScoreTrend.Down,
      },
    },
    {
      id: 'ds86tds5ds8h8dsdah',
      userId: '2',
      bodyScore: {
        value: '79',
        trend: ScoreTrend.Up,
      },
      muscleScore: {
        value: '100',
        trend: ScoreTrend.Up,
      },
      fatScore: {
        value: '50',
        trend: ScoreTrend.Down,
      },
    },
  ],
};

const _scoreReducer = createReducer(
  initialState,
  on(selectUser, (state, { userId }) => ({ ...state, selectedUserId: userId })),
);

export function scoreReducer(state: any, action: any) {
  return _scoreReducer(state, action);
}
