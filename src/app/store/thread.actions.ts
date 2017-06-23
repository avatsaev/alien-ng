

import {Thread} from '../models/thread';
import {Action} from '@ngrx/store';

export const LOAD_ALL = '[Threads] LOAD ALL';
export const LOAD = '[Threads] LOAD';
export const LOAD_ALL_SUCCESS = '[Threads] LOAD ALL SUCCESS';
export const LOAD_SUCCESS = '[Threads] LOAD SUCCESS';

export class LoadAll implements Action {

  readonly type = LOAD_ALL;

  constructor() { }

}

// Load  a single thread, receives the id of the thread as payload
export class Load implements Action {

  readonly type = LOAD;

  constructor(public payload?: string) { }

}

// All threads have been loaded, payload is a list of threads
export class LoadAllSuccess implements Action {

  readonly type = LOAD_ALL_SUCCESS;

  constructor(public payload?: Thread[]) { }

}


// A single thread has been loaded
export class LoadSuccess implements Action {

  readonly type = LOAD_SUCCESS;

  constructor(public payload?: Thread) { }

}


export type All = LoadAll | Load | LoadAllSuccess | LoadSuccess;
