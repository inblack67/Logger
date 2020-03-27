import { GET_LOGS, LOGS_ERROR } from '../actions/types';

const initialState = {
  logs: null,
  loading: true
}

export default (state = initialState, action) => {
  switch(action.type)
  {
    case GET_LOGS: 
    return {
      ...state,
      logs: action.payload,
      loading: false
    }

    case LOGS_ERROR: 
    return {
      ...state,
      logs: null,
      loading: false
    }

    default: return state;
  }
}