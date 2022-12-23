import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    
      appBarSearch: {
        borderRadius: '30px',
        marginTop: '6vh',
        
        
        display: 'flex',
        flexDirection: 'column',
        margin: '8vw',
        marginBottom: '2vh',
        padding: '1vw',
        backgroundColor: '#1a1a1a',
        boxShadow: '-3.5px -3.5px 10.5px 3.5px rgba(255, 255, 255, 0.25), 3.5px 3.5px 10.5px 3.5px rgba(5, 5, 10, 0.75)',
        "@media (max-width: 768px)":{
            padding: '3vw',
            
        }
        ,
        
        "@media (max-width: 640px)":{
            padding: '2.5vw',
            marginLeft: '6vw'
        },
        "@media (max-width: 500px)":{
            padding: '2.5vw',
            marginLeft: '4vw',
            marginBottom: '2vh'
        },
        "@media (max-width: 400px)":{
            padding: '2vw',
            marginLeft: '4vw',
            marginBottom: '2vh'
        }
    },
    gridConatainer: {
        
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column-reverse',
        },
    },
    searchBar: {
      borderRadius: '15px',
      border: '2px solid #25b8ef',

    },
    searchButton: {
      backgroundColor: '#25b8ef',
        color: '#121212',
        width: '30vh',
        fontSize: '2vh',
        marginTop: '2vh',
        marginBottom: '1vh',
        borderRadius: '15px',
        boxShadow: '-2.5px -2.5px 5px rgba(255, 255, 255, 0.30), 2.5px 2.5px 5px rgba(5, 5, 10, 0.7)',
        '&:hover':{
            borderRadius: '15px',
            marginBottom: '1vh',
            background: '#25b8ef',
            boxShadow: '2.5px 2.5px 6px rgba(255, 255, 255, 0.30), -2.5px -2.5px 6px rgba(5, 5, 10, 0.7)',
        },
        "@media (max-width: 650px)":{
            width: '15vh',
            fontSize: '1.5vh',
            marginLeft: '1.5vw'
        },
        "@media (max-width: 450px)":{
            width: '15vh',
            fontSize: '1.5vh',
            marginLeft: '1.5vw'
        },
    },
    questions: {
        marginLeft: '25vw',
        "@media (max-width: 960px)":{
            marginLeft: '0vw'
        },
        "@media (max-width: 850px)":{
            marginLeft: '0vw'
        },
        "@media (max-width: 750px)":{
            marginLeft: '0vw'
        },
        "@media (max-width: 650px)":{
            marginLeft: '0vw'
        },
        "@media (max-width: 450px)":{
            marginLeft: '0vw'
        },

    },
}));