import { FETCH_ALL, CREATE, FETCH_CONTEST, UPDATE, DELETE, FETCH_BY_SEARCH, START_LOADING, END_LOADING, COMMENT } from '../constants/actionTypes';
export default (state = { isLoading: true, contests: []}, action) => {
    switch(action.type) {
        case START_LOADING:
            return {...state, isLoading: true};
        case END_LOADING:
            return {...state, isLoading: false};
        case DELETE:
            return {...state, contests: state.contests.filter((contest) => contest._id !== action.payload)};
        case UPDATE:
            return {...state, contests: state.contests.map((contest) => contest._id === action.payload._id ? action.payload : contest)};
        case COMMENT:
            return {...state, 
                contests: state.contests.map((contest) => {
                    if(contest._id === action.payload._id) return action.payload;

                    return contest;
                }),
            };
        case FETCH_ALL:
            return {
                ...state,
                contests: action.payload.data
            };
        case FETCH_BY_SEARCH:
            return {...state, contests: action.payload };
        case FETCH_CONTEST:
            return {...state, contest: action.payload};
        case CREATE:
            return {...state, contests: [...state.contests, action.payload]};
        default:
            return state; 
    }

}