import { Action } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { PropertyModel } from '../../models/property.model';

import * as fromAction from '../actions/property.action';

export interface PropertyState {
    dataReducer: PropertyModel[];
    loaded: boolean;
    loading: boolean;
}

export const initialState: PropertyState = {
    dataReducer: [  {
        'id': 2,
        'propertyname': 'daliya',
        'email': 'da@gmail.com',
        'phonenumber': 111111111,
        'city': 'kundara',
        'district': 'kollam',
        'state': 'kerala',
      }],
    loaded: false,
    loading: false
 };

export function propertyReducer (state = initialState, action: fromAction.propertyAction ): PropertyState {
    switch (action.type) {
        case fromAction.SUBMIT:
        return {
            ...state,
            loaded: false,
            loading: true,
            dataReducer: action.payload
        };
        case fromAction.SUBMIT_SUCCESS:
            return {
                ...state,
                loaded: true,
                loading: false,
                dataReducer: action.payload
            };

        case fromAction.SUBMIT_FAILURE :
        return {
            ...state,
            loaded: false,
            loading: false,
            dataReducer: action.payload
        };
    }
    return state;
}



export const getDataLoading = (states: PropertyState) => states.loading;
export const getDataLoaded = (states: PropertyState) => states.loaded;
export const getData = (states: PropertyState) => states.dataReducer;



