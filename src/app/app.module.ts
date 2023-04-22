import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { TodoItemComponent } from './MyComponents/todo-item/todo-item.component';
import { AddTodoComponent } from './MyComponents/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';

import { AboutComponent } from './MyComponents/about/about.component';
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
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
