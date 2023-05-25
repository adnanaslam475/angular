import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { TodosComponent } from './MyComponents/todos/todos.component';
import { SignupComponent } from './MyComponents/signup/signup.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { AddProductComponent } from './MyComponents/add-product/add-product.component';
import { ProductsComponent } from './MyComponents/products/products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-product', component: AddProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
