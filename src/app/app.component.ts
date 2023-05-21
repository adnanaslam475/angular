import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from './MyComponents/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-practice';
  a: any = this.accountService?.userValue?.token
  constructor(private accountService: LoginComponent, public router: Router) {

  }
  ngOnInit() {

  }
  logout() {
    this.a = null
    this.accountService.logout()
  }
}
