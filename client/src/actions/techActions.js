import axios from 'axios';
import M from 'materialize-css/dist/js/materialize.min.js';
import { GET_TECHS, TECHS_ERROR } from './types';

export const getTechs = () => async dispatch => {

  try {

    const res = await axios('/techs');
  
    dispatch({
      type: GET_TECHS,
      payload: res.data.data
    }); 

  } catch (err) {

    if((err.response !== undefined) && (!err.response))
    {
      M.toast({
        html: err.response.data.error
      })
    }

    dispatch({
      type: TECHS_ERROR
    });

  }

}

