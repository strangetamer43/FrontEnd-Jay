import { FETCH_ALL, CREATE, UPDATE, DELETE, FETCH_BY_SEARCH, FETCH_POST, START_LOADING, END_LOADING, COMMENT, FETCH_USER_POSTS, FETCH_SPECIFIC_USER_POSTS } from '../constants/actionTypes';
import * as api from '../api';

export const getPosts = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchPosts();
        dispatch({ type: FETCH_ALL, payload: data });
        dispatch({ type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
    
}
export const getPost = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchPost(id);
        dispatch({ type: FETCH_POST, payload: data });
        dispatch({ type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
    
}
export const getUserPosts = (userId) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const send = {
            userId: userId
        }
        const { data: { data } } = await api.fetchUserPosts(send);
        
        dispatch({ type: FETCH_USER_POSTS, payload: data });
        dispatch({ type: END_LOADING});
        
    } catch (error) {
        console.log(error);
    }
    
}
export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data: { data } } = await api.fetchPostsBySearch(searchQuery);
        dispatch({ type: FETCH_BY_SEARCH, payload: data });
        dispatch({ type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
}
export const createPost = (formData, navigate) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.createPost(formData);
        navigate(`/feed/${data._id}`);
        dispatch({type: CREATE, payload: data});
        dispatch({ type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}
export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({ type: DELETE, payload: id});
    } catch (error) {
        console.log(error);
    }
}
export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}
export const disLikePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.disLikePost(id);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}
export const commentPost = (value, id) => async (dispatch) => {
    try {
        const { data } = await api.comment(value, id);   
        dispatch({ type: COMMENT, payload: data });
        return data.comments;
    } catch (error) {
        console.log(error);
    }
}
export const getSpecificUserPosts = (specificUserPosts) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data }  = await api.fetchSpecificUserPosts(specificUserPosts);
        
        dispatch({ type: FETCH_SPECIFIC_USER_POSTS, payload: data });
        dispatch({ type: END_LOADING});
        
    } catch (error) {
        console.log(error);
    }
    
}