import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../config/types';
// import { AuthService } from '../auth.service';
import { LoginComponent } from '../MyComponents/login/login.component';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private auth: LoginComponent) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // const authToken = this.auth.userData;
        const authReq = req.clone({
            headers: req.headers.set('Authorization',
                `Bearer ${JSON.parse(localStorage.getItem('user'))?.token}`)
        });
        console.log('authReq------', JSON.parse(localStorage.getItem('user')).token)
        return next.handle(authReq);
    }
}
