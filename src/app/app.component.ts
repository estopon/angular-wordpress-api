import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WordpressService } from './services/wordpress.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts$: Observable<any[]>;
  searchResult = [];
  categories = [];

  constructor(private wp: WordpressService) {
    this.posts$ = this.wp.getPosts().map(
      (res: any) => res.posts
    );
    this.posts$.subscribe(res => {
      this.searchResult = res;
      this.searchResult.forEach(p => {
        if (this.categories.indexOf(Object.keys(p.categories)[0]) === -1) {
          this.categories.push(Object.keys(p.categories)[0]);
        }
      });
      console.log(this.categories);
    });
  }
}
