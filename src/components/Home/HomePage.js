import React from 'react';



import { Navigate } from "react-router-dom";
import Quizs from '../Quizs/Quizs';










function Dashboard() {


    const [user, setUser] = React.useState(JSON.parse(localStorage.getItem("profile")).result)


    React.useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("profile")).result)

    }, []);




    return (
        <>
            {user ? (
                <Quizs user={user} />

            ) : (
                <Navigate to="/login" />

            )
            }

        </>


    )
}

export default Dashboard;
