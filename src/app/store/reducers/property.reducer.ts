import { Action } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { PropertyModel } from '../../models/property.model';

import * as fromAction from '../actions/property.action';

export interface PropertyState {
    dataReducer: PropertyModel[];
}


export const newState = (state, updatedState) => {
    return Object.assign({}, state, updatedState );
};

export function propertyReducer (state, action: Action): PropertyState {
    console.log(action.type);
    switch (action.type) {
        case fromAction.SUBMIT_SUCCESS :
        return newState(state, action.payload);

        case fromAction.SUBMIT_FAILURE :
        return newState(state, {name: 'Lenin'});
    }
    return state;
}



