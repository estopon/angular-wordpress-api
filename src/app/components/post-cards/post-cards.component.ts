import { Component, OnInit } from '@angular/core';
import { WordpressService } from 'src/app/services/wordpress.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-cards',
  templateUrl: './post-cards.component.html',
  styleUrls: ['./post-cards.component.scss']
})
export class PostCardsComponent implements OnInit {

  categories$: Observable<any[]>;

  constructor(private wp: WordpressService, private router: Router, private route: ActivatedRoute) {
    this.categories$ = this.wp.getCategories().map(
      (res: any) => res.categories
    );
  }

  ngOnInit() {
  }

  navigate(path) {
    this.router.navigate([{outlets: {primary: path, sidemenu: path}}], {relativeTo: this.route});
  }

}
