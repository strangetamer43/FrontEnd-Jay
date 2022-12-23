import { makeStyles } from '@material-ui/core/styles';
import { autocompleteClasses } from '@mui/material';

export default makeStyles({



    card: {
        backgroundColor: '#1a1a1a',
        borderRadius: '30px',
        padding: '3vh',
        marginTop: '10vh',
        marginBottom: '10vh',
        boxShadow: '-5px -5px 15px 5px rgba(255, 255, 255, 0.25), 5px 5px 15px 5px rgba(5, 5, 10, 0.75)',
        "@media (max-width: 1024px)" : {
            marginLeft: '20vw',
    },
    "@media (max-width: 650px)" : {
        marginLeft: '7.5vw',
        boxShadow: '-3px -3px 9px 3px rgba(255, 255, 255, 0.25), 3px 3px 9px 3px rgba(5, 5, 10, 0.75)',
    },
    "@media (max-width: 450px)" : {
        marginLeft: '3vw',
        marginTop: '5vh',
        boxShadow: '-2.5px -2.5px 7.5px 2.5px rgba(255, 255, 255, 0.25), 2.5px 2.5px 7.5px 2.5px rgba(5, 5, 10, 0.75)',
        padding: '1.5vh'
    }
    },
content: {
    marginLeft: '30px',
    marginRight: '30px',
},  
title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
},
about:{
    fontWeight: '550', 
    marginLeft: "38vh", 
    color: 'white',
    "@media (max-width: 1024px)" : {
        fontWeight: '550', 
        marginLeft: "10vh", 
        color: 'white',
    }
},
Header: {
    fontWeight: '550', 
    marginLeft: "38vh", 
    color: 'white',
    fontSize: '10vh',
    marginBottom: '10vh',
    fontFamily: 'Montserrat, sans-serif',
    "@media (max-width: 450px)" : {
        marginLeft: '2vw',
        fontSize: '5vh',
        marginBottom: '3vh'
    }
},
Question: {
    fontWeight: '550', 
    color: 'white', 
    marginTop: '20px',
    marginBottom: '5vh',
    fontSize: '7.5vh',
    fontFamily: 'Montserrat, sans-serif',
    "@media (max-width: 450px)" : {
        marginLeft: '2vw',
        fontSize: '2vh',
        marginBottom: '2vh'
    }
},
Statement: {
    fontSize: '3vh',
    fontFamily: 'Montserrat, sans-serif',
    color: 'white',
    "@media (max-width: 450px)" : {
        
        fontSize: '1.5vh'
    }
}

});