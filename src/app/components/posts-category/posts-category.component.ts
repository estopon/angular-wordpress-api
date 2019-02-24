import { Component, OnInit } from '@angular/core';
import { WordpressService } from 'src/app/services/wordpress.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts-category',
  templateUrl: './posts-category.component.html',
  styleUrls: ['./posts-category.component.scss']
})
export class PostsCategoryComponent implements OnInit {

  posts$: Observable<any[]>;

  constructor(private wp: WordpressService, private route: ActivatedRoute) {
    this.posts$ = this.wp.getPosts(this.route.snapshot.params['id']).map(
      (res: any) => res.posts
    );
  }

  ngOnInit() {
  }

}
