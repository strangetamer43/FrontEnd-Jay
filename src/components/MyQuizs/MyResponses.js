import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getResponseByUser } from '../../APIServices/ResponseAPI';
import NavBar from '../NavBar/NavBar';
import CircularProgress from '@material-ui/core/CircularProgress';




const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const MyResponses = () => {
    const classes = useStyles();
    const [user, setUser] = React.useState(JSON.parse(localStorage.getItem("profile")).obj ? JSON.parse(localStorage.getItem("profile")).obj : JSON.parse(localStorage.getItem("profile")).result)
    const [responseData, setResponseData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);



    React.useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("profile")).obj ? JSON.parse(localStorage.getItem("profile")).obj : JSON.parse(localStorage.getItem("profile")).result)

        if (user._id !== undefined && user._id !== "") {
            getResponseByUser(user._id)
                .then((data) => {
                    setResponseData(data.data)
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
    }, []);


    function getSelectedOption(qId, i, j) {
        var oneResData = responseData[j];
        //console.log(oneResData);

        var selectedOp = oneResData.response.filter(qss => qss.questionId === qId);
        console.log(selectedOp);

        if (selectedOp.length > 0) {

            var finalOption = selectedOp[0].option;
            return finalOption;
        } else {
            return "not attempted";
        }


        // return selectedOp[0].optionId;
        //this.students.filter(stud => stud.Class==className);
    }

    // function getOptionTextById(optionId, questionId, i){
    // var finalOption = questions[i].options.find(oo => oo._id === optionId);
    // return finalOption.optionText
    // }



    return (

        <>
            {loading ? (<CircularProgress />) : (
                <>
                    <NavBar />
                    <div>
                        <p style={{color: '#e3e3e3', fontSize: '3vh', marginTop: '2.5vh', marginLeft: '1vh'}}> Responses</p>
                        <div>
                            <TableContainer component={Paper}>
                                <Table className={classes.table} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Challenge Name</TableCell>

                                            <TableCell key="correct" align="right">No.of Correct Answers</TableCell>

                                        </TableRow>

                                    </TableHead>
                                    <TableBody>

                                        {responseData.map((rs, j) => (
                                            <TableRow key={j}>
                                                <TableCell component="th" scope="row">
                                                    {rs.quizName}
                                                </TableCell>

                                                <TableCell key="correct" align="right">{rs.correctAnswers}</TableCell>


                                            </TableRow>
                                        ))}
                                    </TableBody>

                                </Table>
                            </TableContainer>
                        </div>

                    </div>
                </>

            )}


        </>
    );
}
export default MyResponses


