import { routerReducer, RouterReducerState, SerializedRouterStateSnapshot } from '@ngrx/router-store';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../environments/environment';
import { homeFeatureKey, HomeState, homeReducer } from './home/home.reducer';


export interface AppState {
  readonly router?: RouterReducerState<SerializedRouterStateSnapshot>;
  readonly [homeFeatureKey]: HomeState;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  home: homeReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
