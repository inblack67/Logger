import axios from 'axios';
import M from 'materialize-css/dist/js/materialize.min.js';
import { GET_LOGS, LOGS_ERROR } from './types';

export const getLogs = () => async dispatch => {

  try {

    const res = await axios('/logs');
  
    dispatch({
      type: GET_LOGS,
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
      type: LOGS_ERROR
    });

  }

}

