import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { TodoItemComponent } from './MyComponents/todo-item/todo-item.component';
import { AddTodoComponent } from './MyComponents/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AboutComponent } from './MyComponents/about/about.component';
import { SignupComponent } from './MyComponents/signup/signup.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { reducer } from './reducers/reducers';
import { addProductReducer } from './reducers/product.reducers';

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDMsNj3Ymu74XW9MO4pgjX9k1atmHSfO64",
    authDomain: "reactpwa-2a98d.firebaseapp.com",
    databaseURL: "https://reactpwa-2a98d-default-rtdb.firebaseio.com",
    projectId: "reactpwa-2a98d",
    storageBucket: "reactpwa-2a98d.appspot.com",
    messagingSenderId: "679472623547",
    appId: "1:679472623547:web:3eb02527f5ed5e11c91e9e",
    measurementId: "G-9BTSLHLNHG",
  }
};

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    AboutComponent,
    SignupComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // StoreModule.forRoot({}),
    StoreModule.forRoot({ product: addProductReducer }),

    StoreModule.forFeature('auth', reducer)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
