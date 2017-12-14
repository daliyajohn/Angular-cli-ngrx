import { Action } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { PropertyModel } from '../../models/property.model';

import * as fromAction from '../actions/property.action';

export interface PropertyState {
    dataReducer: PropertyModel[];
}

// export const newState = (state, updatedState) => {
//     return Object.assign({}, state, updatedState );
// };

export function propertyReducer (state, action): PropertyState {
    console.log(action.payload);
    switch (action.type) {
        case 'SUBMIT_SUCCESS' :
            return {
                ...state,
                dataReducer: action.payload
            };

        case fromAction.SUBMIT_FAILURE :
        return {
            ...state,
            dataReducer: action.payload
        };
    }
    return state;
}



