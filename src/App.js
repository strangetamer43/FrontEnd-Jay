import React, { useState, useEffect } from "react";
import { Container } from '@material-ui/core';
import { useDispatch } from "react-redux";
import PostDetails from './components/PostDetails/PostDetails';
import Auth from "./components/Auth/Auth";
import Cookies from "universal-cookie";
import './components/Auth/Style.scss' 
import ProfilePage from "./components/Profile/ProfilePage";
import TermsOfService from "./components/TermsOfService/TermsOfService";
import ContactUs from "./components/TermsOfService/ContactUs";
import Header from "./Header";
import { BrowserRouter, Route, Routes, useLocation, Navigate } from "react-router-dom";
import ContentFeed from "./components/Feed/ContentFeed";
import ContestDetails from "./components/ContestDetails/ContestDetails";
import QuestionFeed from './components/QuestionFeed/QuestionFeed';
import ContestFeed from './components/ContestFeed/ContestFeed';
import QuestionDetails from './components/QuestionDetails/QuestionDetails';
import HomePage from "./components/Home/HomePage";
import QuestionsPage from './components/Profile/QuestionsPage';
import UserProfile from "./components/Profile/UserProfile";
import XML from './sitemap.xml';   
import ChatFunction from "./components/Chat/ChatFunction";
import EntryPage1 from "./components/EntryPage/EntryPage1";
import AboutUsurp from "./components/About/AboutUsurp";
import CheckProfile from "./components/Profile/CheckProfile";
import GettingStarted from "./components/Helper/GettingStarted";
import WithoutHeader from "./WithoutHeader";
import WithHeader from "./WithHeader";
import WithFooter from "./WithFooter";
import ViewTasks from './components/Tasks/ViewTasks';
import MyQuizs from './components/MyQuizs/MyQuizs';
import ShowMyQuiz from "./components/MyQuizs/ShowMyQuiz"
import CollectResponse from './components/Response/CollectResponse';
import EntryPageForRecruiters from './components/EntryPage/EntryPageForRecruiters';
import ResponseSuccess from './components/Response/ResponseSuccess';
import Check from './components/Response/Check';
import MyResponses from './components/MyQuizs/MyResponses';
import QuestionsPageExternal from "./components/Profile/QuestionPageExternal";
import CreateTask from './components/Tasks/CreateTask';
import UsingTheApp from './components/Helper/UsingTheApp';
import PrivacyPolicy from "./components/TermsOfService/PrivacyPolicy";
const user = JSON.parse(localStorage.getItem('profile'));
const App = () => { 
  
    
    
    return(
      
      <>
         
        <BrowserRouter>
          
        
        
        
         
          <Routes>
          
        <Route element={<WithoutHeader />}>
          <Route path="/auth" element={<Auth />} />
          
          <Route element={<WithFooter />}>
            <Route path='/' exact element={<EntryPage1/>} />
            <Route path='/recruiters' exact element={<EntryPageForRecruiters/>}/>
          </Route>
          <Route exact path="/challenge/home" element={<HomePage />} />
          <Route exact path="/myChallenges" element={<MyQuizs />} />
          <Route exact path="/myChallenges/:quizId" element={<ShowMyQuiz />} />
          <Route exact path="/submit/:quizId" element={<Check />} />
          <Route exact path="/submitted" element={<ResponseSuccess />} />
          <Route exact path="/myResponse" element={<MyResponses />} />
        </Route>
        <Route element={<WithHeader />}>
            <Route path='/feed' exact element={<ContentFeed/>} />
            <Route path='/feed/search'  element={<ContentFeed/>} />
            <Route path='/feed/:id'  element={<PostDetails/>} />
            <Route path='/questions' exact element={<QuestionFeed/>} />
            <Route path='/contests' exact element={<ContestFeed/>} />
            <Route path='/contests/:id'  element={<ContestDetails/>} />
            <Route path='/contests/search'  element={<ContestFeed/>} />
            <Route path='/questions/search'  element={<QuestionFeed/>} />
            <Route path='/questions/:id'  element={<QuestionDetails/>} />
            <Route component={XML} path={'/sitemap.xml'} />
            <Route path='/profile' exact element={<ProfilePage/>} />
            <Route path='/questionspage' exact element={<QuestionsPage/>} />
            <Route path='/questionspage/:id' exact element={<QuestionsPageExternal />} />
            <Route path='/profile/:id' exact element={<UserProfile/>} />
            <Route element={<WithFooter />}>
            <Route path='/about' exact element={<AboutUsurp/>} />
            <Route path='/termsofservice'exact element={<TermsOfService/>} />
            <Route path='/privacypolicy' exact element={<PrivacyPolicy/>} />
            <Route path='/contactus' exact element={<ContactUs/>} />
            </Route>
            <Route path='/chat' exact element={<ChatFunction/>} />
            <Route path='/userprofile' exact element={<CheckProfile/>} />
            <Route element={<WithFooter />}>
            <Route path='/gettingstarted' exact element={<GettingStarted/>} />
            </Route>
            <Route element={<WithFooter />}>
            <Route path='/usingapp' exact element={<UsingTheApp/>} />
            
            </Route>
            <Route path='/tasks' exact element={<ViewTasks/>} />
            <Route path='/createtask' exact element={<CreateTask/>} />
            
        </Route>
      </Routes>
          
          
            
            
          
          
          
        </BrowserRouter>
        
      
          
          
          
          
        
      
      </>
    );
  }

  

  


export default App;
