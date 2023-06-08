import { createReducer, on, Action } from '@ngrx/store';
import { Product } from 'src/app/reducers/product/product.model';
import { login, loginSuccess, loginFail } from '../actions/app.actions';
import { initialAppState, IApp } from '../app.interface';

// export const userFeatureKey = 'AppState';

export const reducer = createReducer(
    initialAppState as IApp,
    on(login, (state:any, n: Product|any) => {
        return {
            ...state,
            products: [...state.products, n]
        }
    }),
    on(loginSuccess, (state) => ({
        ...state,
        authenticationMessage: '',
    })),
    on(loginFail, (state, { message }) => ({
        ...state,
        authenticationMessage: message,
    }))
);

export function AppReducer(state: IApp, action: Action): IApp {
    return reducer(state as IApp, action as Action);
}