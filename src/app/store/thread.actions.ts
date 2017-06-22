

import {Thread} from '../models/thread';
import {Action} from '@ngrx/store';

export const LOAD_ALL: string = '[Threads] LOAD ALL';

export class LoadAll implements Action {

  readonly type = LOAD_ALL;

  constructor(public payload?: Thread[]) { }

}


export type All = LoadAll;
