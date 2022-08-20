import { FETCH_ALL, CREATE, START_LOADING, END_LOADING, DELETE } from '../constants/actionTypes';
export default (state = { isLoading: true, followerLists: []}, action) => {
    switch(action.type) {
        case START_LOADING:
            return {...state, isLoading: true};
        case END_LOADING:
            return {...state, isLoading: false};
        case DELETE:
            return {...state, followerLists: state.followerLists.filter((followerList) => followerList._id !== action.payload)};
        
        case FETCH_ALL:
            return {
                ...state,
                followerLists: action.payload.data
            };
        
        case CREATE:
            return {...state, followerLists: [...state.followerLists, action.payload]};
        default:
            return state; 
    }

}