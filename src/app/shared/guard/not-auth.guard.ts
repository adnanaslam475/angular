import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { LoginComponent } from "src/app/MyComponents/login/login.component";


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private _authService: LoginComponent, private _router: Router) { }

    canActivate(): boolean {
        if (this._authService.userValue?.token) {
            return true;
        } else {
            this._router.navigate(['/login'])
            return false
        }
    }
}
