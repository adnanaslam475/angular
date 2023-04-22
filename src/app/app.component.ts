import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-practice';
  /**
   *
   */
  constructor() {
    // super();
    setTimeout(() => {

      this.title = 'newone'
    }, 2000);
  }
}
