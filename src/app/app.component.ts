import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { LoginComponent } from './MyComponents/login/login.component';
import { IAppState } from './store/app.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-practice';
  a: any = this.accountService?.userValue?.token
  constructor(private accountService: LoginComponent, public router: Router,
    private store: Store<IAppState>) { }

  ngOnInit() { }

  logout() {
    this.a = null
    this.accountService.logout()
  }
}
