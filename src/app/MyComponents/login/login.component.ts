import { Component, Injectable } from '@angular/core';
import { Observable, config, throwError, BehaviorSubject } from 'rxjs';
import { httpOptions } from 'src/app/config/hroes.service';
import { Login, User } from 'src/app/config/types';
import { catchError, map, retry, first } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
// const usersKey = 'angular-14-registration-login-example-users';

// let user: User = JSON.parse(localStorage.getItem(usersKey)!) || [];

export class LoginComponent {
  userData: Login | any = {};
  isLoading = false;
  submitted = false;
  private userSubject: BehaviorSubject<User | null>;
  public user: Observable<User | null>;

  constructor(private http: HttpClient, public router: Router,) {
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
  }

  public get userValue() {
    return this.userSubject.value;
  }

  ngOnInit() {
    if (this.userValue?.token) {
      this.router.navigate(['/']);
    }
  }
  configUrl = 'http://localhost:5000/users/login';

  getConfig() {
    return this.http.get<any>(this.configUrl);
  }
  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }

  generalErrorHandler(error: any, caught: Observable<any>): Observable<any> {
    if (error.error.status == "INVALID_TOKEN" || error.error.status == "MAX_TOKEN_ISSUE_REACHED") {
      return error;
    }
    return error;
  }

  onLoginSubmit(body: Login) {
    this.isLoading = true;
    return this.http.post<Login>(this.configUrl, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(first())
      .subscribe({
        next: (a) => {
          this.isLoading = false;
          localStorage.setItem('user', JSON.stringify(a));
          this.userSubject.next(a as any);
          this.router.navigate(['/'])
        },
        error: (e: any) => {
          this.isLoading = false;
        }
      });
  }
}
