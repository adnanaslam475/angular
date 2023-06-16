import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './MyComponents/signup/signup.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { AddProductComponent } from './MyComponents/add-product/add-product.component';
import { ProductsComponent } from './MyComponents/products/products.component';
import { AuthGuard } from './shared/guard/not-auth.guard';
import { LoggedInAuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'signup', component: SignupComponent, canActivate: [LoggedInAuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [LoggedInAuthGuard] },
  {
    path: 'add-product', component: AddProductComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
