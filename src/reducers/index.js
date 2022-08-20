import { combineReducers } from "redux";
import posts from './posts';
import auth from './auth';
import questions from './questions';
import contests from './contests';
import profiles from './profiles';
import followerLists from './followers';
export const reducers =  combineReducers({ posts, auth, questions, contests, profiles, followerLists });