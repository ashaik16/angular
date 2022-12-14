import { createAction, props } from '@ngrx/store';
import { Posts } from 'src/app/models/posts.model';
export const ADD_POST_ACTION = '[post page] add post';
export const UPDATE_POST_ACTION = '[post page] update post';
export const DELETE_POST_ACTION = '[post page] delete post';
export const addPost = createAction(ADD_POST_ACTION, props<{ post: Posts }>());
export const updatePost = createAction(
  UPDATE_POST_ACTION,
  props<{ updatedPost: Posts }>()
);
export const deletePost = createAction(
  DELETE_POST_ACTION,
  props<{ id: String }>()
);
