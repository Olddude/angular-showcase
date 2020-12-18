import { createReducer, on } from '@ngrx/store';
import { Cars, Students, LogLevels, Environment, Case } from '.';
import { updateCase } from './home.actions';

export const homeFeatureKey = 'home';

export interface HomeState {
  readonly title: string;
  readonly cases: Case[];
}

export const initialState: HomeState = {
  title: 'angular-showcase',
  cases: [
    { name: 'Cars', options: Cars, selected: Cars.BMW },
    { name: 'Students', options: Students, selected: Students.Richard },
    { name: 'LogLevels', options: LogLevels, selected: LogLevels.Info },
    { name: 'Environment', options: Environment, selected: Environment.NODE_ENV },
  ]
};

export const homeReducer = createReducer<HomeState>(
  initialState,
  on(updateCase, (state, action) => ({
    ...state,
    cases: state.cases.map(_ => {
      if (_.name === action.payload.name) {
        return action.payload;
      } else {
        return _;
      }
    })
  })),
);
