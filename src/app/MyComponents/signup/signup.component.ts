import { Component, OnInit } from '@angular/core';
import { Observable, first } from 'rxjs';
// import { httpOptions } from 'src/app/config/hroes.service';
import { Signup } from 'src/app/config/types';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/alert.service';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  userData: Signup | any = {};
  isLoading = false;
  submitted = false;
  a = this.accountService?.userValue?.token
  constructor(private http: HttpClient, public router: Router,
    private alertService: AlertService,
    public auth: AngularFireAuth,
    private accountService: LoginComponent,
  ) { }

  configUrl = 'http://localhost:5000/users/signup';

  ngOnInit() {
    if (this.accountService?.userValue?.token) {
      this.router.navigate(['/']);
    }
  }
  getConfig() {
    return this.http.get<any>(this.configUrl);
  }

  generalErrorHandler(error: any, caught: Observable<any>): Observable<any> {
    console.log('error caught:-------> ', error);
    if (error.error.status == "INVALID_TOKEN" || error.error.status == "MAX_TOKEN_ISSUE_REACHED") {
      // console.log('token has expired');
      return error;
    }
    return error;
  }

  onSignupSubmit(body: Signup) {
    console.log('onSignupSubmit----->', body)
    return this.http.post<Signup>(this.configUrl, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(first())
      .subscribe({
        next: (a) => {
          this.isLoading = false;
          console.log('next', a)
          this.router.navigate(['/login'], { queryParams: {} });
        },
        error: (e: any) => {
          this.isLoading = false;
          this.alertService.error(e);
          console.log('errr', e)
        },
        complete() {
          console.log('complete',)
        },
      });
  }
}

