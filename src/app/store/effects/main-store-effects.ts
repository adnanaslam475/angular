import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store, createAction, createFeatureSelector } from '@ngrx/store';
import { config, EMPTY, map, mergeMap, switchMap, withLatestFrom } from 'rxjs';
import { Injectable } from "@angular/core";
import { Product } from "src/app/reducers/product/product.model";
import { HttpClient } from "@angular/common/http";
import { invokeSaveNewProductAPI, addNewProductAPISucess, getProducts, productsFetchAPISuccess } from "../actions/app.actions";
import { httpOptions } from 'src/app/config/hroes.service';


const prefix = '[Books]';
export const selectProducts = createFeatureSelector<Product[]>('mybooks');

export const getBooks = createAction(`${prefix} Get Books`);
// {headers:''}

@Injectable()
export class MainEffects {
  constructor(private actions$: Actions, private http: HttpClient, private store: Store) { }
  getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProducts),
      withLatestFrom(this.store.pipe(select(selectProducts))),
      mergeMap(([, productsFromStore]) => {
        console.log('productsFromStore', productsFromStore)
        if (productsFromStore?.length > 0) {
          return EMPTY;
        }
        return this.http
          // https://jsonplaceholder.typicode.com/todos
          // http://localhost:5000/products
          .get('http://localhost:5000/products')
          .pipe(map((products: Product[]) => {
            // console.log('product_inactions', products)
            return productsFetchAPISuccess({ products })
          }
          ));
      })
    )
  );

  saveNewBook$ = createEffect(() => {
    console.log('saveNewBook$')
    return this.actions$.pipe(
      ofType(invokeSaveNewProductAPI),
      switchMap((product: Product | any) => {
        console.log('click saveNewBook$1')
        return this.http.post('http://localhost:5000/product', product, httpOptions).pipe(
          map((product: Product) => {
            return addNewProductAPISucess({ product });
          })
        );
      })
    );
  });
}
