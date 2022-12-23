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
            padding: '3vw',
            
        }
        ,
        
        "@media (max-width: 640px)":{
            padding: '2.5vw',
            marginLeft: '8vw'
        },
        "@media (max-width: 500px)":{
            padding: '2.5vw',
            marginLeft: '8vw'
        },
        "@media (max-width: 400px)":{
            padding: '2vw',
            marginLeft: '8vw'
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
        "@media (max-width: 768px)":{
            padding: '0vw'
        }
        ,
        
        "@media (max-width: 640px)":{
            marginTop: '15vh',
            marginLeft: '15vw',
            marginRight: '15vw',
            padding: '1.5vh'
        },
        "@media (max-width: 500px)":{
            marginTop: '15vh',
            marginLeft: '15vw',
            marginRight: '15vw',
            padding: '1.5vh'
        },
        "@media (max-width: 400px)":{
            marginTop: '15vh',
            marginLeft: '15vw',
            marginRight: '15vw',
            padding: '1.5vh'
        }
    },
    searchBar: {
        border: '2px solid rgb(37, 184, 239)',
        borderRadius: '15px',
        marginBotom: '1vh',
        color: '#25b8ef',
        fontColor: 'primary',
        "@media (max-width: 650px)":{
            padding: '-5vw',
            
        },
        "@media (max-width: 450px)":{
            padding: '-5vw',
            
        }
        
    },
    searchBar1: {
        border: '2px solid rgb(37, 184, 239)',
        borderRadius: '15px',
        marginBottom: '5px',
        marginTop: '1vh',
        color: '#03dac6',
        fontColor: 'primary',
        "@media (max-width: 650px)":{
            padding: '-5vw',
            
        },
        "@media (max-width: 450px)":{
            padding: '-5vw',
            
        }
    },
    gridConatainer: {
        "@media (max-width: 650px)":{
            
            marginRight: '15vw',
        },
        "@media (max-width: 450px)":{
            
            marginRight: '15vw',
        }
        
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
    top5users: {
        marginTop: '15px',
        marginBottom: '5px',
        marginLeft: '-10px',
        marginRight: '10px',
        color: '#25b8ef',
        listStyleType: 'none',
        fontFamily: 'Montserrat, sans-serif',
        "@media (max-width: 650px)":{
            fontSize: '1.5vh',
            marginTop: '7.5px',
            marginBottom: '2.5px',
            marginLeft: '-5px',
            marginRight: '5px',
            
        },
        "@media (max-width: 450px)":{
            fontSize: '1.5vh',
            marginTop: '7.5px',
            marginBottom: '2.5px',
            marginLeft: '-5px',
            marginRight: '5px',
            
        },
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
        zIndex: '10',
        boxShadow: '2.5px 2.5px 7.5px 2.5px rgba(5, 5, 10, 0.75), -2.5px -2.5px 7.5px 2.5px rgba(255, 255, 255, 0.25)',
        "@media (max-width: 650px)":{
            marginLeft: '77.5vw',
            padding: '1vh',
            width: '17vw',
            borderRadius: '25px',
            boxShadow: '1.5px 1.5px 4.5px 1.5px rgba(5, 5, 10, 0.75), -1.5px -1.5px 4.5px 1.5px rgba(255, 255, 255, 0.25)',
            
        },
        "@media (max-width: 450px)":{
            marginLeft: '73vw',
            padding: '0.75vh',
            width: '19vw',
            borderRadius: '20px',
            
        },
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
        },
        
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
        marginLeft: '1.75vw',
        "@media (max-width: 650px)":{
            marginTop: '0.5vh',
            width: '30px',
            height: '30px',
            marginLeft: '5vw'
            
        },
        "@media (max-width: 450px)":{
            marginTop: '0.5vh',
            width: '30px',
            height: '30px',
            marginLeft: '3.5vw'
            
        },
    },
    leaderboardWhole: {
        
    },
    Icon: {
        marginLeft: '-15px', 
        fontWeight: '650',
        width: '45px',
        height: '45px',
        "@media (max-width: 650px)" : {
            width: '22px',
            height: '22px',
            marginLeft: '-15px'
        },
        "@media (max-width: 450px)" : {
            width: '18px',
            height: '18px',
            marginLeft: '-10px'
        }
    }
}));