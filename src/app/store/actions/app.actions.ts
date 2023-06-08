import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/reducers/product/product.model';

export const login = createAction(
    '[loginModule] log user Action',
    props<Product>()
);

export const loginSuccess = createAction(
    '[loginModule] log user Success Action'
);

export const loginFail = createAction(
    '[loginModule] log user Fail Action',
    props<{ message: string }>()
);