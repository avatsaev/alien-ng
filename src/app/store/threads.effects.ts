


import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {MockService} from '../services/mock.service';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import * as ThreadsActions from './thread.actions';


@Injectable()
export class ThreadsEffects {

  @Effect()
  getAll$: Observable<Action> = this.actions$.ofType(ThreadsActions.LOAD_ALL)
      .switchMap( () => this.mockS.getThreads() )
      .map(res => new ThreadsActions.LoadAllSuccess(res));

  @Effect()
  get$: Observable<Action> = this.actions$.ofType(ThreadsActions.LOAD)
      .map( (action: ThreadsActions.Load) => action.payload)
      .switchMap( (id) => this.mockS.getThread(id) )
      .map(res => new ThreadsActions.LoadSuccess(res));

  constructor(
      private actions$: Actions,
      private mockS: MockService
  ) {}


}
