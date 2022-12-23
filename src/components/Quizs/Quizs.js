import React, { useEffect, useState } from 'react'
import { getAllQuizs } from "../../APIServices/QuestionAPI"
import { Button, Grid, CircularProgress, Container } from "@material-ui/core";
import { getQuizBySearch } from '../../APIServices/QuestionAPI';
import useStyle from "./Style";
import CssBaseline from '@material-ui/core/CssBaseline';
import Quiz from './Quiz/Quiz';
import NavBar from '../NavBar/NavBar';
import Form from 'react-bootstrap/Form';
import { createUser } from '../../APIServices/UserAPI';


const Quizs = ({ user }) => {
    const classes = useStyle();
    const [quizs, setQuizs] = useState([])
    const [isLoading, setLoading] = useState(true);
    const [searchValue, setSearchValue] = useState("");


    useEffect(() => {
        getAllQuizs()
            .then((data) => {
                setQuizs(data.data)
                setLoading(false);
            }, error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                console.log(resMessage);
            });




    }, [user])

    const search = (value) => {
        console.log(value);
        getQuizBySearch(value)
            .then((data) => {
                setQuizs(data.data)
                setLoading(false);
            },

                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    console.log(resMessage);
                }
            );

    }


    return (
        <div className={classes.body}>
            <NavBar current="quizs" search={search} />
            <div >
                <div>
                    <CssBaseline />
                    {isLoading ? (<CircularProgress />) : ""}

                    <Container className={classes.cardGrid} maxWidth="lg">
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                value={searchValue}
                                width="5rem"

                                onChange={(e) => { setSearchValue(e.target.value) }}
                            />
                            <>


                                <Button variant="contained" color="primary" onClick={(e) => { search(searchValue) }}>
                                    Search
                                </Button>
                                &nbsp;
                                <Button variant="contained" color="secondary" href="/challenge/home">
                                    ALL
                                </Button>
                            </>
                        </Form>
                    </Container>
                    <Container className={classes.cardGrid} maxWidth="lg">

                        <Grid container spacing={6}>
                            {quizs.map((quiz, i) => (

                                quiz.visibility ? (<Quiz formData={quiz} key={i} />) : ""
                            ))}

                        </Grid>
                    </Container>


                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Quizs