import { createReducer } from '@ngrx/store';
import { initialPostState } from './posts.state';

const _postReducer = createReducer(initialPostState);

export function postsReducer(state, action) {
  return _postReducer(state, action);
}
