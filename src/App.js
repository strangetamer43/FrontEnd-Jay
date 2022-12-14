import React, { useState, useEffect } from "react";
import { Container } from '@material-ui/core';
import { useDispatch } from "react-redux";
import PostDetails from './components/PostDetails/PostDetails';
import Auth from "./components/Auth/Auth";
import Cookies from "universal-cookie";
import './components/Auth/Style.scss'
import ProfilePage from "./components/Profile/ProfilePage";


import Header from "./Header";
import { BrowserRouter, Route, Routes, useLocation, Navigate } from "react-router-dom";
import ContentFeed from "./components/Feed/ContentFeed";
import ContestDetails from "./components/ContestDetails/ContestDetails";
import QuestionFeed from './components/QuestionFeed/QuestionFeed';
import ContestFeed from './components/ContestFeed/ContestFeed';
import QuestionDetails from './components/QuestionDetails/QuestionDetails';

import QuestionsPage from './components/Profile/QuestionsPage';
import UserProfile from "./components/Profile/UserProfile";

import ChatFunction from "./components/Chat/ChatFunction";
import EntryPage1 from "./components/EntryPage/EntryPage1";
import AboutUsurp from "./components/About/AboutUsurp";
import CheckProfile from "./components/Profile/CheckProfile";
import GettingStarted from "./components/Helper/GettingStarted";
import WithoutHeader from "./WithoutHeader";
import WithHeader from "./WithHeader";
import ViewTasks from './components/Tasks/ViewTasks';
import CreateTask from './components/Tasks/CreateTask';

import HomePage from "./components/Home/HomePage"
import MyQuizs from './components/MyQuizs/MyQuizs';
import ShowMyQuiz from "./components/MyQuizs/ShowMyQuiz"
import CollectResponse from './components/Response/CollectResponse';
import ResponseSuccess from './components/Response/ResponseSuccess';
import Check from './components/Response/Check';
import MyResponses from './components/MyQuizs/MyResponses';
import QuestionsPageExternal from "./components/Profile/QuestionPageExternal";
const user = JSON.parse(localStorage.getItem('profile'));
const App = () => {



  return (

    <>

      <BrowserRouter>





        <Routes>

          <Route element={<WithoutHeader />}>
            <Route path="/" element={<Auth />} /> /*Responsive*/
            <Route path='/entrypage' exact element={<EntryPage1 />} /> /*Responsive*/
            <Route exact path="/challenge/home" element={<HomePage />} />
            <Route exact path="/myChallenges" element={<MyQuizs />} />
            <Route exact path="/myChallenges/:quizId" element={<ShowMyQuiz />} />
            <Route exact path="/submit/:quizId" element={<Check />} />
            <Route exact path="/submitted" element={<ResponseSuccess />} />
            <Route exact path="/myResponse" element={<MyResponses />} />
          </Route>
          <Route element={<WithHeader />}>
            <Route path='/feed' exact element={<ContentFeed />} /> /*Responsive*/
            <Route path='/feed/search' element={<ContentFeed />} /> /*Responsive*/
            <Route path='/feed/:id' element={<PostDetails />} />/*Responsive*/
            <Route path='/questions' exact element={<QuestionFeed />} /> /*Responsive*/
            <Route path='/contests' exact element={<ContestFeed />} /> /*Responsive*/
            <Route path='/contests/:id' element={<ContestDetails />} /> /*Responsive*/
            <Route path='/contests/search' element={<ContestFeed />} />/*Responsive*/
            <Route path='/questions/search' element={<QuestionFeed />} /> /*Responsive*/
            <Route path='/questions/:id' element={<QuestionDetails />} />/*Responsive*/
            <Route path='/profile' exact element={<ProfilePage />} />  /*Responsive*/
            <Route path='/questionspage' exact element={<QuestionsPage />} /> /*Responsive*/
            <Route path='/questionspage/:id' exact element={<QuestionsPageExternal />} /> /*Responsive*/

            <Route path='/profile/:id' exact element={<UserProfile />} />/*Responsive*/
            <Route path='/about' exact element={<AboutUsurp />} /> /*Responsive*/
            <Route path='/chat' exact element={<ChatFunction />} /> /*Responsive*/
            <Route path='/userprofile' exact element={<CheckProfile />} />  /*Not Opening*/
            <Route path='/gettingstarted' exact element={<GettingStarted />} /> /*Responsive*/
            <Route path='/tasks' exact element={<ViewTasks />} /> /*Responsive*/
            <Route path='/createtask' exact element={<CreateTask />} /> /*Responsive*/

          </Route>
        </Routes>







      </BrowserRouter>








    </>
  );
}






export default App;
