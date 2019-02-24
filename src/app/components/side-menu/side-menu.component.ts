import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WordpressService } from 'src/app/services/wordpress.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

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
