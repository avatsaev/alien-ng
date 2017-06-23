


import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {MockService} from '../services/mock.service';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import * as ThreadsActions from '../store/thread.actions';


@Injectable()
export class ThreadsEffects {
  constructor(
      private actions$: Actions,
      private mockS: MockService
  ) {}
  
  
  @Effect()
  getAll$: Observable<Action> = this.actions$.ofType(ThreadsActions.LOAD_ALL)
      .switchMap( () => this.mockS.getThreads() )
      .map(res => new ThreadsActions.LoadAllSuccess(res))
}
