import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/reducers/product/product.model';

export const login = createAction(
    '[loginModule] log user Action',
    props<Product>()
);

export const getProducts = createAction(
    '[productModule] Action',
    props
);

export const invokeSaveNewProductAPI = createAction(
    '[productModule] Add Action',
    props<{ product: Product }>()
);

export const productsFetchAPISuccess = createAction('[productModule API] Fetch API Success',
    props<{ products: Product[] | any }>()
);

export const addNewProductAPISucess = createAction(
    '[Books API] save new book api success',
    props<{ product: Product }>()
);

export const loginSuccess = createAction(
    '[loginModule] log user Success Action'
);

export const loginFail = createAction(
    '[loginModule] log user Fail Action',
    props<{ message: string }>()
);