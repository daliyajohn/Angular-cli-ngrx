import { Action } from '@ngrx/store';

export function PropertyAddReducer(state: string = 'hello123', action: Action) {
    console.log(action.type, state);
    switch (action.type) {
        case 'SPANISH':
        return state = 'hai';

        case 'FRENCH':
        return state = 'helloyyy';

        default:
        return state;
    }
}
