import { GET_TECHS, TECHS_ERROR } from '../actions/types';

const initialState = {
  techs: null,
  loading: true
}

export default (state = initialState, action) => {
  switch(action.type)
  {
    case GET_TECHS: 
    return {
      ...state,
      techs: action.payload,
      loading: false
    }

    case TECHS_ERROR: 
    return {
      ...state,
      techs: null,
      loading: false
    }

    default: return state;
  }
}