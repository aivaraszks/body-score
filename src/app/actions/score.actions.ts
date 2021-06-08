import { createAction, props } from '@ngrx/store';

export const selectUser = createAction('[Body score] Select user', props<{ userId: string }>());
