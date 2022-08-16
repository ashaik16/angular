import { Posts } from 'src/app/models/posts.model';

export interface PostsState {
  posts: Posts[];
}
export const initialPostState: PostsState = {
  posts: [
    { id: 1, title: 'Sample title 1', description: 'Sample Description 1' },
    { id: 2, title: 'Sample title 2', description: 'Sample Description 2' },
  ],
};
