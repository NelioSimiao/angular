import {Component} from '@angular/core';
import {concat} from 'rxjs/internal/observable/concat';
import {ToastyConfig} from 'ng2-toasty';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private toastyConfig: ToastyConfig) {
    this.toastyConfig.theme = 'bootstrap';
  }
}
