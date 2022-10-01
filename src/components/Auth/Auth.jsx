import React, { useState } from 'react';
import Cookies from "universal-cookie";
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';
import { Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import * as FcIcons from 'react-icons/fc';
import styled from 'styled-components';
import { Marginer } from "./Marginer";
import usurp_logo from "../../Assets/Usurp-new-logo.png";
import * as BsIcons from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signin, signup } from '../../actions/auth';

import "./Style.scss"
const Container = styled.div`
  
  display: flex;
  
 justify-content:center;
  ${'' /* margin-left: 36vw; */}
  
  
  @media only screen and (max-width: 1200px) {
    margin: 15px;
  padding: 60px;
  }
  @media only screen and (max-width: 900px) {
    margin: 12px;
  padding: 50px;
  }
  @media only screen and (max-width: 700px) {
    margin: 8px;
  padding: 25px;
  }
  @media only screen and (max-width: 450px) {
    margin: 5px;
  padding: 5px;
  }
  @media only screen and (max-width: 350px) {
    margin: 5px;
  padding: 5px;
  }
`;

const Fields = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  padding: 0rem;
  background: #1a1a1a;
  border-radius: 30px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
    
  padding: 5rem;
  box-shadow: 0px 1px 5px #000;
  border-radius: 30px;
  transition: 0.8s ease;
  box-shadow: -4px -4px 15px 4px rgba(255, 255, 255, 0.20), 4px 4px 15px 4px rgba(0, 0, 0, 0.65);
  background: #1a1a1a;
  @media only screen and (max-width: 1100px) {
    padding: 1.5rem;
  }
  @media only screen and (max-width: 800px) {
    padding: 0.85rem;
    
  }
`;

const Para = styled.p` 
  font-size: 28px;
  
  color: #25b8ef;
  font-weight: 600;
  padding: 1rem 0rem;
  
`;

const Input = styled.div`
    display: flex;
    flex-direction: column;
    
  
    
    padding: 1.5rem;
    @media only screen and (max-width: 1100px) {
        padding: 1.25rem;
        
      }
    @media only screen and (max-width: 800px) {
        padding: 0.3rem;
        
      }
    @media only screen and (max-width: 650px) {
        padding: 0.1rem;
        
    }
`;
const Label = styled.label`
    margin-bottom: 0.45rem;
    
    font-size: 13px;
    
    letter-spacing: 0.9px;
    line-height: 1.3;
    color: rgb(37, 184, 239);
`;

const Inputi = styled.input`
    padding: 0.55rem 0.4rem;
    border: 2px solid rgb(37, 184, 239);
    border-radius: 15px;
    font-size: 14px;
    color: rgb(37, 184, 239);
    box-shadow: -1.5px -1.5px 6px 1.5px rgba(255, 255, 255, 0.20),  2px 2px 8px 2px rgba(0, 0, 0, 0.75);
    outline: none;
    transition: all 150ms ease-in-out 0.3s;
    width: 100%;
    background: #1a1a1a;
`;
const Account = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
  
    margin-top: 0.2rem;
`;
const Span = styled.span` {
    color: #25b8ef;
    cursor: pointer;
    font-weight: 550;
    }
`;
const Image = styled.img` {
    
    display: flex;
    flex-direction: column;
    padding: 0px;
    
    width: 17.85vh;
    height: 25.26vh;
    margin-top: 0px;
    margin-left: 9vw;
    @media only screen and (max-width: 650px) {
      display: column-reverse;
    }
}
    
`;
const SignIn = styled.button`
    border-radius: 15px;
    background: #22262b;
    margin-left: 30px;
    border: 0px solid #25b8ef;
    margin-right: 100px;
    color: #25b8ef;
    box-shadow: -2px -2px 6px 2px rgba(255, 255, 255, 0.25), 2px 2px 6px 2px rgba(0, 0, 0, 0.75);
    font-weight: 500;
    font-size: 17px;
    padding: 0.35rem 0.6rem;
    outline: none;
    cursor: pointer;
    transition: 0.3s ease;
    :hover{
      border-radius: 15px;
    background: #22262b;
    margin-left: 30px;
    border: 0px solid #25b8ef;
    margin-right: 100px;
    color: #25b8ef;
    box-shadow: 2px 2px 6px 2px rgba(255, 255, 255, 0.25), -2px -2px 6px 2px rgba(0, 0, 0, 0.75);
    font-weight: 500;
    font-size: 17px;
    padding: 0.35rem 0.6rem;
    outline: none;
    cursor: pointer;
    transition: 0.3s ease;
    }
    @media only screen and (max-width: 1100px) {
        padding: 0.5rem 1.25rem;
        font-size: 14px;
        border: 3px solid #1167bf;
        border-radius: 20px;
      }
    @media only screen and (max-width: 800px) {
        padding: 0.5rem 1.25rem;
        font-size: 13px;
        border: 3px solid #1167bf;
        border-radius: 20px;
      }
    @media only screen and (max-width: 375px) {
        padding: 0.5rem 1.25rem;
        font-size: 12px;
        border: 3px solid #1167bf;
        border-radius: 15px;
      }
`;
const SignIng = styled.button`
    border-radius: 15px;
    background: #22262b;
    border: 0px solid #c935ff;
    box-shadow: -2px -2px 6px 2px rgba(255, 255, 255, 0.20), 2px 2px 6px 2px rgba(0, 0, 0, 0.55);
    
    color: #c935ff;
    
    font-weight: 500;
    font-size: 17px;
    font-color: #000000;
    padding: 0.5rem 1.2rem;
    outline: none;
    cursor: pointer;
    transition: 0.3s ease;
    :hover {
      border-radius: 15px;
    background: #22262b;
    border: 0px solid #c935ff;
    box-shadow: 2px 2px 6px 2px rgba(255, 255, 255, 0.20), -2px -2px 6px 2px rgba(0, 0, 0, 0.55);
    
    color: #c935ff;
    
    font-weight: 500;
    font-size: 17px;
    font-color: #000000;
    padding: 0.5rem 1.2rem;
    outline: none;
    cursor: pointer;
    transition: 0.3s ease;
    }
    @media only screen and (max-width: 1100px) {
        padding: 0.5rem 1.25rem;
        font-size: 14px;
        border: 3px solid #1167bf;
        border-radius: 20px;
      }
    @media only screen and (max-width: 800px) {
        padding: 0.25rem 0.625rem;
        font-size: 13px;
        border: 3px solid #1167bf;
        border-radius: 20px;
      }
    @media only screen and (max-width: 375px) {
        padding: 0.1rem 0.25rem;
        font-size: 10px;
        border: 3px solid #1167bf;
        border-radius: 15px;
      }
`;

const initialState = {
  fullName: '',
  username: '',
  phoneNumber: '',
  emailId: '',
  password: '',
  confirmPassword: '',
  image: null,
}


const Auth = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState(null);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", name);
    form.append("username", username);
    form.append("phoneNumber", phoneNumber);
    form.append("emailId", emailId);
    form.append("password", password);
    form.append("confirmPassword", confirmPassword);
    form.append("image", image);

    if (isSignup) {
      dispatch(signup(form, navigate))
    } else {
      dispatch(signin(form, navigate))
    }
  }
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup)
  }
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: 'AUTH', data: { result, token } });
      navigate('/feed');

    } catch (error) {
      console.log(error);
    }

  };
  const googleFailure = (error) => {
    console.log(error);
    console.log("Google Sign In was unsuccessful");
  }
  return (



    <Container className="main-container">
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Image
          src={usurp_logo}>

        </Image>
        <Fields >
          <Content>
            <Para>{isSignup ? 'Sign Up' : 'Sign In'}</Para>

            <form onSubmit={handleSubmit}>
              {isSignup && (
                <Input>
                  <Label htmlFor="name" >Full Name </Label>
                  <Inputi
                    name="name"
                    type="text"
                    placeholder='Full Name'
                    inputColor='white'
                    onChange={(e) => setName(e.target.value)}
                    required
                  />

                </Input>
              )}


              <Input>
                <Label htmlFor="username">Username </Label>
                <Inputi
                  name="username"
                  type="text"
                  placeholder='Username'
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </Input>

              {isSignup && (
                <Input>
                  <Label htmlFor="phoneNumber">Phone Number (10 digits) </Label>

                  <Inputi
                    name="phoneNumber"
                    type="text"
                    placeholder='Phone Number'
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </Input>

              )}

              {isSignup && (
                <Input>
                  <Label htmlFor="emailId">Email Id </Label>
                  <Inputi
                    name="emailId"
                    type="text"
                    placeholder='Email Id'
                    onChange={(e) => setEmailId(e.target.value)}
                    required
                  />
                </Input>
              )}

              <Input>
                <Label htmlFor="password">Password </Label>
                <Inputi
                  name="password"
                  type="password"
                  placeholder='Password'
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Input>

              {isSignup && (
                <Input>
                  <Label htmlFor="confirmPassword">Confirm Password </Label>
                  <Inputi
                    name="confirmPassword"
                    type="password"
                    placeholder='Confirm Password'
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </Input>
              )}


              {isSignup && (

                <div style={{ marginLeft: '25px' }}>
                  <Label>Upload Profile Picture</Label>

                  <div>
                    <label htmlFor="image">
                      <BsIcons.BsFillCameraFill style={{ color: '#25b8ef', cursor: 'pointer', marginLeft: '0px', marginTop: '10px' }} size={30} />
                      <input type='file' onChange={(e) => setImage(e.target.files[0])} name="file" accept="image/*" id="image" hidden />
                      <Typography>{image?.name}</Typography>
                    </label>
                  </div>
                </div>
              )}

              <Marginer direction="vertical" margin="15px" />
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <SignIn>{isSignup ? "Sign Up" : "Sign In"}</SignIn>

                <GoogleLogin
                  clientId="22206794554-165ahregurdak2b5p4oqgirg4no38ip7.apps.googleusercontent.com"
                  render={(renderProps) => (
                    <SignIng
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}

                      variant="contained"
                    >
                      <FcIcons.FcGoogle fontSize="large" />
                      &nbsp;
                      {isSignup ? "Google Sign Up" : "Google Sign In"}
                    </SignIng>
                  )}
                  onSuccess={googleSuccess}
                  onFailure={googleFailure}
                  cookiePolicy="single_host_origin"


                />
              </div>
            </form>
            <Marginer direction="vertical" margin="30px" />
            <Account>
              <p style={{ color: '#eeedee' }}>
                {isSignup
                  ? "Already have an account?"
                  : "Don't have an account?"
                }
                <Span onClick={switchMode}>
                  {isSignup ? 'Sign In' : 'Sign Up'}
                </Span>
              </p>

            </Account>

          </Content>

        </Fields>


      </div>
    </Container>

  )
}

export default Auth;