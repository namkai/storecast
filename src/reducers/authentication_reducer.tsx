import { AuthenticationAction } from '../actions';
import { AuthenticationState } from '../types';
import { AUTHENTICATE, UNAUTHENTICATE } from '../constants/actionTypes';

export default function authentication(state: AuthenticationState, action: AuthenticationAction): AuthenticationState {
  switch (action.type) {
    case AUTHENTICATE:
      return { authenticated: true };
    case UNAUTHENTICATE:
      return { authenticated: false };
  }
  return state;
}