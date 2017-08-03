import * as actions from '../constants/actionTypes';

export interface authenticate {
  type: actions.AUTHENTICATE;
}

export interface unauthenticate {
  type: actions.UNAUTHENTICATE;
}
export type AuthenticationAction = authenticate | unauthenticate;

export const authenticate = () => ({ type: actions.AUTHENTICATE });

export const unauthenticate = () => ({ type: actions.UNAUTHENTICATE });

