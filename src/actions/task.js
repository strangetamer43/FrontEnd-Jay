import { FETCH_ALL, CREATE, UPDATE, DELETE, FETCH_BY_SEARCH, FETCH_POST, START_LOADING, END_LOADING, COMMENT, FETCH_USER_POSTS, FETCH_SPECIFIC_USER_POSTS, FETCH_TASK } from '../constants/actionTypes';
import * as api from '../api';



export const createTask = (formDataT, navigate) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.createTask(formDataT);
        navigate(`/tasks/${data._id}`);
        dispatch({type: CREATE, payload: data});
        dispatch({ type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
}

export const getTasks = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchTasks();
        dispatch({ type: FETCH_ALL, payload: data });
        dispatch({ type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
    
}

export const getTask = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchTask(id);
        dispatch({ type: FETCH_TASK, payload: data });
        dispatch({ type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
    
}