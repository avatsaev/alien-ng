

import {Thread} from '../models/thread';
import {Action} from '@ngrx/store';

export const LOAD_ALL = '[Threads] LOAD ALL';
export const LOAD_ALL_SUCCESS = '[Threads] LOAD ALL SUCCESS';

export class LoadAll implements Action {

  readonly type = LOAD_ALL;

  constructor() { }

}


export class LoadAllSuccess implements Action {

  readonly type = LOAD_ALL_SUCCESS;

  constructor(public payload?: Thread[]) { }

}


export type All = LoadAll | LoadAllSuccess;
