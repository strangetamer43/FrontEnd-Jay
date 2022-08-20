import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import { Link, Dispatch } from 'react-router-dom';
import {SidebarData} from './SidebarData';
import "./Sidebar.css";
import { IconContext } from "react-icons";
import usurpLogo from "./usurp-logo.png";

const Button = styled.button`
    border-radius: 13px;
    margin-top: 15px;
    margin-left: 20px;
    background: linear-gradient(330deg, rgba(88,2,2,1) 7%, rgba(255,0,0,1) 100%);
    border: 0px solid #6f006f;
    border-bottom: 2px solid #1c0000;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
    font-size: 18px;
    padding: 0.7rem 1.2rem;
    outline: none;
    cursor: pointer;
    transition: 0.3s ease;
`;


function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch({ type: 'LOGOUT'});
    navigate('/');
    setUser(null);
}
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
    <IconContext.Provider value={{color:"#03dac6"}}>
        <div className='navbar' style={{borderRadius: "30px"}}>
            <Link to="#" className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            
            

        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className="navbar-toggle">
                    <Link to="#" className='menu-bars'>
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.className}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                })}
                <Button value={{color:"#ffffff"}} onClick={logout} ><BiIcons.BiPowerOff style={{color: 'white'}} size={20}/>&nbsp;&nbsp;LOGOUT</Button>
            </ul>

        </nav>
    </IconContext.Provider>
    </>
  )
}

export default Sidebar;