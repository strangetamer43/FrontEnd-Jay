import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    appBarSearch: {
        borderRadius: '30px',
        marginTop: '6vh',
        
        
        display: 'flex',
        flexDirection: 'column',
        margin: '8vw',
        marginBottom: '5vh',
        padding: '1vw',
        backgroundColor: '#1a1a1a',
        
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
        marginTop: '1vh',
        
        
        
        display: 'flex',
        flexDirection: 'column',
        margin: '1vw',
        padding: '1vw',
        backgroundColor: '#1a1a1a',
        
    },
    searchBar: {
        border: '2px solid rgb(03, 218, 198)',
        borderRadius: '15px',
        marginBottom: '5px',
        padding: '1vh',
        color: '#03dac6',
        fontColor: 'primary'
    },
    searchBar1: {
        border: '2px solid rgb(03, 218, 198)',
        borderRadius: '15px',
        marginBottom: '5px',
        
        color: '#03dac6',
        fontColor: 'primary'
    },
    gridConatainer: {
        
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column-reverse',
        },
    },
    button: {
        backgroundColor: '#03dac6',
        color: '#121212',
        width: '30vh',
        marginTop: '15px',
        marginBottom: '5px',
        borderRadius: '15px',
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
        color: '#03dac6',
        fontSize: '21px',
    },
    leaderboardButtons: {
        padding: '2vh',
        backgroundColor: '#1a1a1a',
        position: 'fixed',
        marginLeft: '87vw',
        marginTop: '0.5vh',
        borderRadius: '15px',
    },
    buttonsL: {
        borderRadius: '15px',
        marginBottom: '1vh',
        background: '#ac23e5',
    },
    buttonsP: {
        borderRadius: '15px',
        marginBottom: '1vh',
        background: '#8c1fcc',
    },
    buttonsQ: {
        borderRadius: '15px',
        marginBottom: '1vh',
        background: '#7929cf',
    },
    title: {
        color: '#25b8ef',
        fontSize: '2.3vh',
        marginBottom: '1vh'
    }
}));