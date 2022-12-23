import { FETCH_ALL, CREATE, UPDATE, DELETE, FETCH_BY_SEARCH, FETCH_QUESTION, START_LOADING, END_LOADING, COMMENT, FETCH_USER_QUESTIONS, FETCH_SPECIFIC_USER_QUESTIONS } from '../constants/actionTypes';
import * as api from '../api';

export const getQuestions = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchQuestions();
        dispatch({ type: FETCH_ALL, payload: data });
        dispatch({ type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
    
}
export const getQuestion = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchQuestion(id);
        dispatch({ type: FETCH_QUESTION, payload: data });
        dispatch({ type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
    
}
export const getQuestionsBySearch = (searchQuery) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data: { data } } = await api.fetchQuestionsBySearch(searchQuery);
        dispatch({ type: FETCH_BY_SEARCH, payload: data });
        dispatch({ type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
}
export const createQuestion = (formData, navigate) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.createQuestion(formData);
        navigate(`/questions/${data._id}`);
        dispatch({type: CREATE, payload: data});
        dispatch({ type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
}

export const updateQuestion = (id, question) => async (dispatch) => {
    try {
        const { data } = await api.updateQuestion(id, question);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}
export const deleteQuestion = (id) => async (dispatch) => {
    try {
        await api.deleteQuestion(id);
        dispatch({ type: DELETE, payload: id});
    } catch (error) {
        console.log(error);
    }
}
export const likeQuestion = (id) => async (dispatch) => {
    try {
        const { data } = await api.likeQuestion(id);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}
export const disLikeQuestion = (id) => async (dispatch) => {
    try {
        const { data } = await api.disLikeQuestion(id);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}
export const commentQuestion = (value, id) => async (dispatch) => {
    try {
        const { data } = await api.commentQ(value, id);   
        dispatch({ type: COMMENT, payload: data });
        return data.comments;
    } catch (error) {
        console.log(error);
    }
}
export const getUserQuestions = (userId) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const send = {
            userId: userId
        }


        const { data: { data } } = await api.fetchUserQuestions(send);
        console.log(data);
        dispatch({ type: FETCH_USER_QUESTIONS, payload: data });
        dispatch({ type: END_LOADING});
        
    } catch (error) {
        console.log(error);
    }
    
}
export const getSpecificUserQuestions = (specificUserQuestions) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data }  = await api.fetchSpecificUserQuestions(specificUserQuestions);
        
        dispatch({ type: FETCH_SPECIFIC_USER_QUESTIONS, payload: data });
        dispatch({ type: END_LOADING});
        
    } catch (error) {
        console.log(error);
    }
    
}