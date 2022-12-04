import React, { useState } from 'react'
import useStyle from "./Style"
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from "react-bootstrap/Image";
import { Button } from '@material-ui/core';
import { MenuItem, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import logo from "../../Assets/logo.png"
import "./Style.css"
const NavBar = (props) => {


    const [user, setUser] = React.useState(JSON.parse(localStorage.getItem("profile")).result)


    React.useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("profile")).result)
    }, []);

    const classes = useStyle();
    const navigate = useNavigate();

    const logout = () => {
        var logoutConfirmation = window.confirm("Really want to logout?");

        if (logoutConfirmation) {
            navigate("/login");

            localStorage.removeItem("profile")
        }
    }

    return (
        <div>
            <Navbar expand="lg" className="navbar-dark bg-secondary nav-bar">
                <Container fluid>
                    <Navbar.Brand href="/challenge/home">
                        <img
                            alt=""
                            src={logo}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />{' '}
                        Usurp Challenge
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" >
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className={classes.active} href="/challenge/home">Home</Nav.Link>
                            <Nav.Link className={classes.active} href="/myResponse">My Responses</Nav.Link>




                        </Nav>



                        {/* <Nav pullRight>
                            <NavDropdown eventKey={1}
                                title={
                                    <div className="pull-left">
                                        <Image
                                            src={user.imageUrl}
                                            alt="profile"
                                        />
                                        &nbsp;
                                        {user.name}
                                    </div>
                                }
                                id="basic-nav-dropdown">

                                <MenuItem className={classes.drop} eventKey={1.1} onClick={() => { console.log("Profile") }}>Profile</MenuItem>
                                <MenuItem className="col-xs-12" eventKey={1.3} onClick={logout}>
                                    <i className="fa fa-sign-out"></i> Logout
                                                  roundedCircle
                                            style={{ width: '35px' }}
                          </MenuItem>
                            </NavDropdown>
                        </Nav> */}

                    </Navbar.Collapse>
                </Container >
            </Navbar ></div >
    )
}

export default NavBar