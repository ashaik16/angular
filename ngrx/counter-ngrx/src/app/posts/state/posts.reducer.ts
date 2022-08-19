import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { addPost, deletePost, updatePost } from './posts.action';
import { initialPostState } from './posts.state';

const _postReducer = createReducer(
  initialPostState,
  on(addPost, (state, action) => {
    let post = { ...action.post };
    post.id = (state.posts.length + 1).toString();
    return {
      ...state,
      posts: [...state.posts, post],
    };
  }),
  on(updatePost, (state, action) => {
    let updatedPost = state.posts.map((post) => {
      return post.id === action.updatedPost.id ? action.updatedPost : post;
    });
    return {
      ...state,
      posts: updatedPost,
    };
  }),
  on(deletePost, (state, action) => {
    let updatedPost = state.posts.filter((post) => post.id != action.id);
    return {
      ...state,
      posts: updatedPost,
    };
  })
);

export function postsReducer(state, action) {
  return _postReducer(state, action);
}
