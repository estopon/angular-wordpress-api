import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { WordpressService } from './services/wordpress.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  categories$: Observable<any[]>;

  constructor(private wp: WordpressService, private router: Router, private route: ActivatedRoute) {
    this.categories$ = this.wp.getCategories().map(
      (res: any) => res.categories
    );
  }

  navigate(path) {
    this.router.navigate(['/', 'categories', path]).then(
      nav => {
        window.location.reload();
      }, err => {
        console.log(err);
      }
    );
  }

}
