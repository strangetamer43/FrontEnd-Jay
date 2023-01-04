import { FETCH_ALL, CREATE, FETCH_POST, UPDATE, DELETE, FETCH_BY_SEARCH, START_LOADING, END_LOADING, COMMENT, FETCH_USER_POSTS, FETCH_SPECIFIC_USER_POSTS } from '../constants/actionTypes';
export default (state = { isLoading: true, contacts: []}, action) => {
    switch(action.type) {
        case START_LOADING:
            return {...state, isLoading: true};
        case END_LOADING:
            return {...state, isLoading: false};
        
        case CREATE:
            return {...state, posts: [...state.contacts, action.payload]};
        
    }

}