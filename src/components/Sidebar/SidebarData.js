import React, {useState} from 'react';


import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as GiIcons from "react-icons/gi";

export const SidebarData = [
    {
        title: 'Content Feed',
        path: '/feed',
        icon: <MdIcons.MdCastForEducation />,
        className:'nav-text'
    },
    {
        title: 'Contest Dashboard',
        path: '/contests',
        icon: <MdIcons.MdEmojiEvents/>,
        className:'nav-text'
    },
    {
        title: 'Challenges',
        path: '/challenge/home',
        icon: <GiIcons.GiArcheryTarget/>,
        className:'nav-text'
    }, 
    {
        title: 'Questions Feed',
        path: '/questions',
        icon: <RiIcons.RiQuestionnaireFill/>,
        className:'nav-text'
    },
    {
        title: 'Chat',
        path: '/chat',
        icon: <BsIcons.BsFillChatRightDotsFill/>,
        className:'nav-text'
    }, 
    {
        title: 'Profile',
        path: '/profile',
        icon: <BsIcons.BsPersonCircle/>,
        className:'nav-text'
    }, 
   
    {
        title: 'About Usurp',
        path: '/about',
        icon: <RiIcons.RiTeamFill/>,
        className:'nav-text'
    }, 
    
     
     
]