import { Action } from '@ngrx/store';

export const SUBMIT_SUCCESS = '[submit] success';
export const SUBMIT_FAILURE = '[submit] failure';


export class SubmitSuccess implements Action {
    readonly type = SUBMIT_SUCCESS;
    constructor(public payload: any) { }
}

export class SubmitFailure implements Action {
    readonly type = SUBMIT_FAILURE;
    constructor(public payload: any) { }
}

export type propertyAction = SubmitSuccess | SubmitFailure ;
