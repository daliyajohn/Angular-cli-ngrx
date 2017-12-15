import { Action } from '@ngrx/store';

export const SUBMIT_SUCCESS = '[submit] success';
export const SUBMIT_FAILURE = '[submit] failure';

export const SIDENAV_OPEN = '[sidenav] true';
export const SIDENAV_CLOSE = '[sidenav] false';

export class SubmitSuccess implements Action {
    readonly type = SUBMIT_SUCCESS;
    constructor(public payload: any) { }
}

export class SubmitFailure implements Action {
    readonly type = SUBMIT_FAILURE;
    constructor(public payload: any) { }
}

export class SideNavOpen implements Action {
    readonly type = SIDENAV_OPEN;
}
export class SideNavClose implements Action {
    readonly type = SIDENAV_CLOSE;
}

export type propertyAction = SubmitSuccess | SubmitFailure | SideNavOpen | SideNavClose;
