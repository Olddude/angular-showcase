import { createAction, props } from '@ngrx/store';
import { Case } from '.';

export const updateCase = createAction(
  '[Home] update case',
  props<{ payload: Case }>()
);
