import React, { useEffect, useState } from 'react'
import { Paper, Typography } from '@material-ui/core'

import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


const ResponseSuccess = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")).result)
    const [result, setResult] = useState(JSON.parse(localStorage.getItem("result")))
    const [response, setResponse] = useState(JSON.parse(localStorage.getItem("response")))
    const [showScore, setShowScore] = useState(JSON.parse(localStorage.getItem("showscore")))

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("profile")).result)
    }, [])


    const handleClick = () => {
        localStorage.removeItem("result")
        localStorage.removeItem("response")
        localStorage.removeItem("showscore")
        window.open("/challenge/home", "_self");

    }
    return (
        user ? (
            <>
                <div style={{ minHeight: '100vh' }}>
                    <AppBar position="static" style={{ backgroundColor: 'teal' }}>
                        <Toolbar>
                            <IconButton edge="start" style={{ marginRight: '10px', marginBottom: '5px' }} color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" style={{}}>
                                Usurp
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <br></br>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        style={{ marginTop: '40px' }}
                    >
                        <Grid item xs={12} sm={5} style={{ width: '100%' }}>
                            <Grid style={{ borderTop: '10px solid teal', borderRadius: 10 }}>
                                <div>
                                    <div>
                                        <Paper elevation={2} style={{ width: '100%' }}>
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '15px', paddingTop: '20px', paddingBottom: '20px' }}>
                                                <Typography variant="h4" style={{ fontFamily: 'sans-serif Roboto', marginBottom: "15px" }}>
                                                    Challenge Submitted
                                                </Typography>
                                                {result ? (
                                                    <Typography variant="h5" style={{ fontFamily: 'sans-serif Roboto', marginBottom: "15px" }}>
                                                        Your Got <b>{response.data.grade}</b> Grade in the Challenge
                                                    </Typography>
                                                ) : ""}

                                                {showScore ? (
                                                    <Typography variant="h5" style={{ fontFamily: 'sans-serif Roboto', marginBottom: "15px" }}>
                                                        Your Got <b>{response.data.correctAnswers}</b> Score in the Challenge
                                                    </Typography>
                                                ) : ""}

                                                <div style={{ display: 'flex' }}>
                                                    <Button id="home" variant="contained" color="success" onClick={handleClick}>Home</Button>
                                                </div>

                                            </div>
                                        </Paper>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>

            </>
        ) : (<></>)
    )
}

export default ResponseSuccess  