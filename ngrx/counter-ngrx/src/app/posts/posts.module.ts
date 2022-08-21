import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AddPostsComponent } from './add-posts/add-posts.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostlistComponent } from './postlist/postlist.component';
import { postsReducer } from './state/posts.reducer';
import { POST_STATE_NAME } from './state/posts.selector';

const routes: Routes = [
  {
    path: '',
    component: PostlistComponent,
    children: [
      { path: 'add', component: AddPostsComponent },
      { path: 'edit/:id', component: EditPostComponent },
    ],
  },
];
@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(POST_STATE_NAME, postsReducer),
  ],
})
export class PostModule {}
