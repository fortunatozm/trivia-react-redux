import { GET_PLAYER_TOKEN } from '../actions/loginAction';

const INITIAL_STATE = '';

function token(state = INITIAL_STATE, action) {
  const { payload } = action;
  switch (action.type) {
  case GET_PLAYER_TOKEN:
    return payload.token;
  default:
    return state;
  }
}

export default token;
