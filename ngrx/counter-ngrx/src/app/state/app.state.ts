import { sharedReducer } from './shared/shared.reducer';
import { SharedState } from './shared/shared.state';
import { SHARED_STATE_NAME } from './shared/shared.selector';
export interface AppState {
  // counter: CounterState;
  // posts: PostsState;
  //these has separate modules not required now
  [SHARED_STATE_NAME]: SharedState;
}

export const appReducer = {
  // counterModule: counterReducer,
  // postsModule: postsReducer,
  [SHARED_STATE_NAME]: sharedReducer,
};
