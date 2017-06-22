import * as ThreadsActions from './thread.actions';
import {ThreadsState} from './threads.state';
import {INITIAL_THREADS_STATE} from './threads.state'


export function threadsReducer(state: ThreadsState = INITIAL_THREADS_STATE, action: ThreadsActions.All): ThreadsState {

  switch (action.type) {

    case ThreadsActions.LOAD_ALL : {
      return {
        ...state,
        allThreads: action.payload
      }
    }

    default: {
      return state;
    }

  }

}
