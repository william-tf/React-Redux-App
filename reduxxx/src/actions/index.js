import axios from 'axios'
export const FETCH_SUCCESSFUL = 'FETCH_SUCCESSFUL'
export const FETCH_FAILED = 'FETCH_FAILED'
export const FETCH_STARTED = 'FETCH_STARTED'

export const getWanted = () => dispatch => {
    dispatch({type:FETCH_STARTED});
    axios.get('https://anapioficeandfire.com/api/books')
    .then(res => 
        dispatch({type: FETCH_SUCCESSFUL, payload:res.data}))
    .catch(err => dispatch({type:FETCH_FAILED, payload: err}))
    }

