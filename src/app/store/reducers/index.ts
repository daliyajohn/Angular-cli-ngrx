import * as fromReducer from './property.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface PropertyStates {
    datas: fromReducer.PropertyState;
}

export const reducerConnect: ActionReducerMap<PropertyStates> = {
    datas: fromReducer.propertyReducer
};
