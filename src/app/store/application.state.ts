import {ThreadsState} from './threads.state';

export interface ApplicationState {
  threads: ThreadsState
}


export function selectAllThreads(state: ApplicationState) {
  return state.threads.allThreads;
}

export function selectAllThreadsCount(state: ApplicationState) {
  return state.threads.allThreads.length;
}


export function selectThread(state: ApplicationState, id: string) {
  return state.threads.allThreads.filter(t => t.id === id)[0];
}
