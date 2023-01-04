import { CREATE, UPDATE, FETCH_PROFILE, FETCH_USER_PROFILE, FETCH_ALL, START_LOADING, END_LOADING, FETCH_SPECIFIC_USER_PROFILE } from '../constants/actionTypes';
import * as api from '../api'


export const getProfiles = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchProfiles();
        dispatch({ type: FETCH_ALL, payload: data });
        dispatch({ type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
    
}


export const getProfile = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchProfile(id);
        dispatch({ type: FETCH_PROFILE, payload: data });
        dispatch({ type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
    
}
export const createProfile = (profile) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.createProfile(profile);
        dispatch({type: CREATE, payload: data});
        dispatch({ type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
}
export const updateProfile = (id, profile) => async (dispatch) => {
    try {
        const data  = await api.updateProfile(id, profile);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}
export const getUserProfile = (userProfile) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchUserProfile(userProfile);
        console.log(data);
        dispatch({ type: FETCH_USER_PROFILE, payload: data });
        dispatch({ type: END_LOADING});
        
    } catch (error) {
        console.log(error);
    }
    
}
export const getSpecificUserProfile = (userId) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const reqdata = {
            userId: userId
        }
        const { data } = await api.fetchSpecificUserProfile(reqdata);
        
        dispatch({ type: FETCH_SPECIFIC_USER_PROFILE, payload: data });
        dispatch({ type: END_LOADING});
        
    } catch (error) {
        console.log(error);
    }
    
}
export const addExperience = (id, profile) => async (dispatch) => {
    try {
        console.log(profile)
        const profileData = {
            profile: profile
        }
        const { data } = await api.addExperience(id, profileData);
        console.log("data", data)

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}