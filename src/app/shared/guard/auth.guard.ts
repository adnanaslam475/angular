import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { LoginComponent } from "src/app/MyComponents/login/login.component";

@Injectable()
export class LoggedInAuthGuard implements CanActivate {

    constructor(private _authService: LoginComponent, private _router: Router) { }

    canActivate(): boolean {
        if (this._authService.userValue?.token) {
            this._router.navigate(['/'])
            return false
        } else {
            return true
        }
    }
}
