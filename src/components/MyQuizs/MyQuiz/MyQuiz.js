import React from 'react'
import useStyles from "./Style"
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import "./Style.css"
export default function MyQuiz(props) {
    const classes = useStyles();

    const [quiz, setQuiz] = React.useState({})


    React.useEffect(() => {
        //console.log(props.formData)
        setQuiz(props.formData)
    }, [props])


    return (

        <Grid item xs={12} sm={6} md={6} alignItems="stretch" spacing={8} raised className={classes.grid}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={quiz.quizImage ? quiz.quizImage : "https://img.freepik.com/premium-vector/online-exam-test-paper-time-icon-element-design-questionanswer-pencil-stopwatch_259594-210.jpg?w=740"}
                    title="Contemplative Reptile"
                />
                <CardContent style={{ color: "#eeddee" }}>
                    <Typography gutterBottom variant="h4" component="h2">
                        {quiz.quizName}
                    </Typography>
                    <Typography variant="body1" component="p">
                        {quiz.description}
                    </Typography>


                </CardContent>
                {/*href={"/form/" + form._id}*/}
                <div style={{ textAlign: "center", margin: "auto" }}>

                    <a href={"/myChallenges/" + quiz._id} style={{ textDecoration: "none" }}><Button className={classes.fabButton} >Show Challenge</Button></a>
                </div>



            </Card>
        </Grid >

    )
}
