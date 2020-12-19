import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Case } from '.';
import { AppState } from '../app.reducer';
import { updateCase } from './home.actions';

@Injectable({ providedIn: 'root' })
export class HomeService {

  constructor(
    private readonly store: Store<AppState>
  ) { }

  title(): Observable<string>{
    return this.store.select<string>(state => state.home.title);
  }

  cases(): Observable<Case[]> {
    return this.store.select<Case[]>(state => state.home.cases);
  }

  updateCase(target: Case, selectedValue: any): void {
    this.store.dispatch(
      updateCase({
        payload: {
          ...target,
          selected: selectedValue
        }
      })
    );
  }

}
