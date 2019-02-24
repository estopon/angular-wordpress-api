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

  constructor() { }

}
