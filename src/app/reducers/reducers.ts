import { combineReducers } from '@ngrx/store';
// import { usersReducer } from './product.reducers';
import { addProductReducer } from './users.reducers';

export interface AuthModuleState {
    products: any
    // users: any
}

export const mainReducer: AuthModuleState = {
    // users: usersReducer,
    products: addProductReducer,
};

const combineReducer = combineReducers(mainReducer)


// export function reducer(state: any, action: any) {
//     return combineReducer(state, action);
// }
