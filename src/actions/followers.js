import { FETCH_ALL, CREATE, DELETE, START_LOADING, END_LOADING } from '../constants/actionTypes';
import * as api from '../api';


export const createFollowers = (formDataF) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.createFollowers(formDataF);
        
        dispatch({type: CREATE, payload: data});
        dispatch({ type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
}
export const getFollowers = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchFollowers();
        dispatch({ type: FETCH_ALL, payload: data });
        dispatch({ type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
    
}
export const deleteFollowers = (id) => async (dispatch) => {
    try {
        await api.deleteFollowers(id);
        dispatch({ type: DELETE, payload: id});
    } catch (error) {
        console.log(error);
    }
}