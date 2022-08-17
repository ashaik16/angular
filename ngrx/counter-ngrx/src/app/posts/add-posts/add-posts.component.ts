import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css'],
})
export class AddPostsComponent implements OnInit {
  postForm: FormGroup;
  constructor() {}

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
  }
}
