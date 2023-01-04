import { FETCH_ALL, CREATE, UPDATE, DELETE, FETCH_BY_SEARCH, FETCH_POST, START_LOADING, END_LOADING, COMMENT, FETCH_USER_POSTS, FETCH_SPECIFIC_USER_POSTS } from '../constants/actionTypes';
import * as api from '../api';

export const createContact = (formDataContact) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.createContact(formDataContact);
        
        dispatch({type: CREATE, payload: data});
        dispatch({ type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
}