import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WordpressService } from './wordpress.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts$: Observable<any[]>;
  searchResult = [];

  constructor(private wp: WordpressService) {
    this.posts$ = this.wp.getPosts().map(
      (res: any) => res.posts
    );
    this.posts$.subscribe(res => {
      this.searchResult = res;
      let categories = [];
      this.searchResult.forEach(p => {
        console.log(p);
        console.log(p.categories);
      });
    });
  }
}
