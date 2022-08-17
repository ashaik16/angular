import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { addPost } from './posts.action';
import { initialPostState } from './posts.state';

const _postReducer = createReducer(
  initialPostState,
  on(addPost, (state, action) => {
    let post = { ...action.post };
    post.id = state.posts.length + 1;
    return {
      ...state,
      posts: [...state.posts, post],
    };
  })
);

export function postsReducer(state, action) {
  return _postReducer(state, action);
}
