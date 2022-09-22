import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    appBarSearch: {
        borderRadius: '30px',
        marginTop: '6vh',
        
        width: '84vw',
        display: 'flex',
        flexDirection: 'column',
        margin: '8vw',
        marginBottom: '2vh',
        padding: '1vw',
        backgroundColor: '#1a1a1a',
        boxShadow: '-3.5px -3.5px 10.5px 3.5px rgba(255, 255, 255, 0.25), 3.5px 3.5px 10.5px 3.5px rgba(5, 5, 10, 0.75)',
        "@media (max-width: 768px)":{
            marginRight: '8rem',
            marginLeft : '5rem',
        }
        ,
        
        "@media (max-width: 640px)":{
            marginRight: '3rem',
        },
        "@media (max-width: 500px)":{
            marginRight: '-4rem',
            marginLeft : '5rem',
        },
        "@media (max-width: 400px)":{
            marginRight: '-7rem',
            marginLeft : '5rem',
        }
    },
    appBarSearch1: {
        borderRadius: '30px',
        marginTop: '30vh',
        marginLeft: '30vw',
        marginRight: '30vw',
        
        display: 'flex',
        flexDirection: 'column',
        margin: '1vw',
        padding: '1vw',
        backgroundColor: '#1a1a1a',
        
    },
    searchBar: {
        border: '2px solid rgb(37, 184, 239)',
        borderRadius: '15px',
        marginBotom: '1vh',
        color: '#25b8ef',
        fontColor: 'primary',
        
    },
    searchBar1: {
        border: '2px solid rgb(37, 184, 239)',
        borderRadius: '15px',
        marginBottom: '5px',
        marginTop: '1vh',
        color: '#03dac6',
        fontColor: 'primary'
    },
    gridConatainer: {
        
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column-reverse',
        },
    },
    button: {
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
        }
    },
    top5users: {
        marginTop: '15px',
        marginBottom: '5px',
        marginLeft: '-10px',
        marginRight: '10px',
        color: '#03dac6',
        listStyleType: 'none',
    },
    topTitle: {
        color: '#25b8ef',
        fontSize: '3vh',
        marginBottom: '2vh',
        marginLeft: '15vw'
    },
    leaderboardButtons: {
        padding: '2vh',
        backgroundColor: '#1a1a1a',
        position: 'fixed',
        marginLeft: '88vw',
        marginTop: '0.5vh',
        borderRadius: '30px',
        width: '7vw',
        boxShadow: '2.5px 2.5px 7.5px 2.5px rgba(5, 5, 10, 0.75), -2.5px -2.5px 7.5px 2.5px rgba(255, 255, 255, 0.25)',
    },
    buttonsL: {
        borderRadius: '15px',
        marginBottom: '1.5vh',
        background: '#ac23e5',
        marginTop: '2vh',
        boxShadow: '2px 2px 6px 2px rgba(5, 5, 10, 0.75), -2px -2px 6px 2px rgba(255, 255, 255, 0.25)',
        '&:hover':{
            borderRadius: '15px',
            marginBottom: '1.5vh',
            background: '#ac23e5',
            boxShadow: '2px 2px 6px 2px rgba(255, 255, 255, 0.25), -2px -2px 6px 2px rgba(5, 5, 10, 0.75)',
        }
    },
    buttonsP: {
        borderRadius: '15px',
        marginBottom: '1.5vh',
        background: '#8c1fcc',
        boxShadow: '2px 2px 6px 2px rgba(5, 5, 10, 0.75), -2px -2px 6px 2px rgba(255, 255, 255, 0.25)',
        '&:hover':{
            borderRadius: '15px',
            marginBottom: '1.5vh',
            background: '#8c1fcc',
            boxShadow: '2px 2px 6px 2px rgba(255, 255, 255, 0.25), -2px -2px 6px 2px rgba(5, 5, 10, 0.75)',
        }
    },
    buttonsQ: {
        borderRadius: '15px',
        marginBottom: '1vh',
        background: '#7929cf',
        boxShadow: '2px 2px 6px 2px rgba(5, 5, 10, 0.75), -2px -2px 6px 2px rgba(255, 255, 255, 0.25)',
        '&:hover':{
            borderRadius: '15px',
            marginBottom: '1vh',
            background: '#7929cf',
            boxShadow: '2px 2px 6px 2px rgba(255, 255, 255, 0.25), -2px -2px 6px 2px rgba(5, 5, 10, 0.75)',
        }
    },
    title: {
        color: '#25b8ef',
        fontSize: '2.8vh',
        
    },
    LeaderboardIcon: {
        width: '40%',
        height:'50%',
        marginLeft: '1.75vw'
    }
}));