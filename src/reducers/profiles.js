import { CREATE, FETCH_PROFILE, UPDATE, START_LOADING, END_LOADING, FETCH_ALL, FETCH_USER_PROFILE, FETCH_SPECIFIC_USER_PROFILE } from '../constants/actionTypes';
export default (state = { isLoading: true, profiles: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case UPDATE:
            return { ...state, profiles: action.payload };
        case FETCH_ALL:
            return {
                ...state,
                profiles: action.payload.data
            };
        case FETCH_PROFILE:
            return { ...state, profile: action.payload };
        case FETCH_USER_PROFILE:
            return { ...state, profiles: action.payload };
        case FETCH_SPECIFIC_USER_PROFILE:
            return { ...state, profiles: action.payload };
        case CREATE:
            return { ...state, profiles: action.payload };
        default:
            return state;
    }

}