
import { Todo } from '../Todo';
export const ADD_PRODUCT = 'ADD_PRODUCT';

export function addProductReducer(state: Todo[] = [], action: any) {
    switch (action.type) {
        case ADD_PRODUCT:
            return [...state, action.payload];
        default:
            return state;
    }
}