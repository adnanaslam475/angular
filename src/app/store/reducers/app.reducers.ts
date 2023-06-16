import { createReducer, on, Action, } from '@ngrx/store';
import { Product } from 'src/app/reducers/product/product.model';
import { login, loginSuccess, loginFail, productsFetchAPISuccess, addNewProductAPISucess } from '../actions/app.actions';
import { initialAppState, IApp } from '../app.interface';

export const initialState: ReadonlyArray<Product> = [];

export const reducer = createReducer(
    initialAppState as IApp,
    on(login, (state: any, n: Product | any) => {
        return {
            ...state,
            products: [...state.products, n]
        }
    }),
    on(loginSuccess, (state) => ({
        ...state,
    })),
    on(loginFail, (state, { message }) => ({
        ...state,
    })),
    on(productsFetchAPISuccess, (state, { products }) => {
        return {
            ...state,
            products
        };
    }),
    on(addNewProductAPISucess, (state: any, { product }) => {
        console.log('addNewProductAPISucess', product)
        return {
            ...state,
            products: [...state.products, product]
        };
    }),
);

export function AppReducer(state: IApp, action: Action): IApp {
    return reducer(state as IApp, action as Action);
}