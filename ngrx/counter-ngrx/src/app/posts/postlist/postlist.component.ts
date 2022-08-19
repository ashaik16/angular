import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Posts } from 'src/app/models/posts.model';
import { AppState } from 'src/app/state/app.state';
import { deletePost } from '../state/posts.action';
import { getPosts } from '../state/posts.selector';
import { PostsState } from '../state/posts.state';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css'],
})
export class PostlistComponent implements OnInit {
  posts$: Observable<Posts[]>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.posts$ = this.store.select(getPosts);
  }
  onDeletePost(id: String) {
    this.store.dispatch(deletePost({ id }));
  }
}
