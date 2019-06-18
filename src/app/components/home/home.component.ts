import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    new WOW({live: false}).init();
  }

  navigate() {
    this.router.navigate(['/', 'about']).then(
      nav => {
        // window.location.reload();
      }, err => {
        console.log(err);
      }
    );
  }

}
