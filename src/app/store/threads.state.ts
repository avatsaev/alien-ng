import {Thread} from '../models/thread';

export interface ThreadsState {
  allThreads: Thread[];
}

export const INITIAL_THREADS_STATE: ThreadsState = {
  allThreads: []
};
