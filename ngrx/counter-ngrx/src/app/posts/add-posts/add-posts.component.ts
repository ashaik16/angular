import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Posts } from 'src/app/models/posts.model';
import { AppState } from 'src/app/state/app.state';
import { addPost } from '../state/posts.action';

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css'],
})
export class AddPostsComponent implements OnInit {
  postForm: FormGroup;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }
  // showDescriptionError() {
  //   if (this.postForm.touched && !this.postForm.valid) {
  //     const descriptionForm = this.postForm.get['description'];
  //     if (descriptionForm.hasError('required'))
  //       return 'Description is required';
  //     if (descriptionForm.hasError('minlength'))
  //       return 'Minlength should be 10';
  //   }
  //   return '';
  // }
  onAddPost() {
    console.log(this.postForm.value);
    if (!this.postForm.valid) return;
    const post: Posts = {
      title: this.postForm.value.title,
      description: this.postForm.value.description,
    };
    this.store.dispatch(addPost({ post }));
  }
}
