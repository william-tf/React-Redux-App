import {FETCH_SUCCESSFUL, FETCH_STARTED, FETCH_FAILED} from '../actions'


const initialState = {
    isLoading:false,
    books:[],
    error:''
}



export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_STARTED:
            return {
                ...state,
                isLoading:true,
                error:''
            }
        case FETCH_SUCCESSFUL:
            return {
                ...state,
                isLoading:false,
                books:action.payload,
                error:''
            }
        case FETCH_FAILED:
            return{
                ...state,
                isLoading:false,
                error:action.payload
            }
        default:
            return state
    }
}