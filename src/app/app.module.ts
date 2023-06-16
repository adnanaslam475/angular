import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
// import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { TodoItemComponent } from './MyComponents/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { SignupComponent } from './MyComponents/signup/signup.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { reducer,metaRecuerss } from './reducers/reducers';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule, } from '@angular/material/button-toggle';
import { addProductReducer } from './reducers/product.reducers';
import { AuthGuard } from './shared/guard/not-auth.guard';
import { LoggedInAuthGuard } from './shared/guard/auth.guard';
import { ProductsComponent } from './MyComponents/products/products.component';
import { AddProductComponent } from './MyComponents/add-product/add-product.component';
import {
  AngularFireStorageModule,
} from "@angular/fire/compat/storage";
import { AuthInterceptor } from './http-interceptors/auth-interceptor';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { AddProductFormComponent } from './MyComponents/add-product-form/add-product-form.component';
import { TitleInputComponent } from './MyComponents/titleinput/titleinput.component';
import { reducers, metaReducers } from './store';
import { MainEffects } from './store/effects/main-store-effects';
// import { MainEffects } from "./store/effects/main-store-effects.ts";
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
    SignupComponent,
    LoginComponent,
    ProductsComponent,
    AddProductComponent,
    AddProductFormComponent,
    TitleInputComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, "cloud"),
    AppRoutingModule,
    EffectsModule.forFeature(MainEffects),
    EffectsModule.forRoot([]),
    HttpClientModule, NgxDropzoneModule,
    MatSlideToggleModule, AngularFireStorageModule,
    MatInputModule, MatButtonModule,
    MatButtonToggleModule,
    FormsModule,
    BrowserAnimationsModule,
    // StoreModule.forRoot({ product: addProductReducer }),
    StoreModule.forRoot(reducers, { metaReducers }), StoreDevtoolsModule.instrument(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: ErrorStateMatcher,
      useClass: ShowOnDirtyErrorStateMatcher,
      
    },
    AuthGuard,
    LoggedInAuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
