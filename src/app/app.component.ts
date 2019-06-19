import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
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

  @ViewChild('burger') burger: ElementRef;
  @ViewChild('menu') menu: ElementRef;

  isopen = false;

  constructor(private wp: WordpressService, private router: Router, private route: ActivatedRoute, private renderer: Renderer2) {
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

  burgerClick() {
    if (!this.isopen) {
      this.renderer.addClass(this.burger.nativeElement, 'is-active');
      this.renderer.addClass(this.menu.nativeElement, 'is-active');
      this.isopen = true;
    } else {
      this.renderer.removeClass(this.burger.nativeElement, 'is-active');
      this.renderer.removeClass(this.menu.nativeElement, 'is-active');
      this.isopen = false;
    }
  }

}
