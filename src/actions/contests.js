import { FETCH_ALL, CREATE, UPDATE, DELETE, FETCH_BY_SEARCH, FETCH_CONTEST, START_LOADING, END_LOADING, COMMENT } from '../constants/actionTypes';
import * as api from '../api';

export const getContests = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchContests();
        dispatch({ type: FETCH_ALL, payload: data });
        dispatch({ type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
    
}
export const getContest = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchContest(id);
        dispatch({ type: FETCH_CONTEST, payload: data });
        dispatch({ type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
    
}
export const getContestsBySearch = (searchQuery) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data: { data } } = await api.fetchContestsBySearch(searchQuery);
        dispatch({ type: FETCH_BY_SEARCH, payload: data });
        dispatch({ type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
}
export const createContest = (contest, navigate) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.createContest(contest);
        navigate(`/contests/${data._id}`);
        dispatch({type: CREATE, payload: data});
        dispatch({ type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
}

export const updateContest = (id, contest) => async (dispatch) => {
    try {
        const { data } = await api.updateContest(id, contest);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}
export const deleteContest = (id) => async (dispatch) => {
    try {
        await api.deleteContest(id);
        dispatch({ type: DELETE, payload: id});
    } catch (error) {
        console.log(error);
    }
}
export const likeContest = (id) => async (dispatch) => {
    try {
        const { data } = await api.likeContest(id);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}
export const disLikeContest = (id) => async (dispatch) => {
    try {
        const { data } = await api.disLikeContest(id);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}
export const registeredUser = (id) => async (dispatch) => {
    try {
        const { data } = await api.registeredUser(id);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}
export const commentContest = (value, id) => async (dispatch) => {
    try {
        const { data } = await api.commentC(value, id);   
        dispatch({ type: COMMENT, payload: data });
        return data.comments;
    } catch (error) {
        console.log(error);
    }
}