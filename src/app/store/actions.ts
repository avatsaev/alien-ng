

import {Thread} from '../models/thread';
import {Action} from '@ngrx/store';

export const LOAD_ALL_THREADS_ACTION = 'LOAD_ALL_THREADS_ACTION';

export class LoadAllThreadsAction implements Action {

  readonly type = LOAD_ALL_THREADS_ACTION;

  constructor(public payload: Thread[]) {

  }

}
