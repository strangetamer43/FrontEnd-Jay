import { makeStyles } from '@material-ui/core/styles';


export default makeStyles({
    paper: {
        marginTop: '20vh',
        marginLeft: '40vw',
        padding: '3vh',
        borderRadius: '30px',
        position: 'absolute',
        backgroundColor: '#1a1a1a',
        "@media (max-width: 450px)" : {
            marginLeft: '15vw',
    },
      
    },
    placeButtons: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    paperBig: {
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
    button: {
        marginLeft: '90vw',
        marginTop: '35vh',
        position: 'fixed',
        zIndex: '10',
        borderRadius: '50px',
        width: 60,
        height: 60,
        color: '#1a1a1a', 
        background: 'linear-gradient(315deg, rgba(246,0,241,1) 5%, rgba(37,184,239,1) 100%)', 
        boxShadow: '2.5px 2.5px 6px rgba(5, 5, 10, 0.8), -2px -2px 5px rgba(255, 255, 255, 0.40)',
        '&hover':{
            color: '#1a1a1a', 
            background: 'linear-gradient(315deg, rgba(246,0,241,1) 5%, rgba(37,184,239,1) 100%)', 
            boxShadow: '-2.5px -2.5px 6px rgba(5, 5, 10, 0.8), 2px 2px 5px rgba(255, 255, 255, 0.4)'
        },
        "@media (max-width: 650px)":{
            width: '25px',
            height: '25px',
            marginTop: '25vh',
            marginLeft: '78vw',
            borderRadius: '30px',
        },
        "@media (max-width: 450px)":{
            marginTop: '25vh',
            width: '25px',
            height: '25px',
            borderRadius: '26px',
            marginLeft: '75vw',
        }
    },
    buttons1 : {
        border: '2px solid rgb(37, 184, 239)',
        marginTop: '5px',
        borderRadius: '15px',
        color: 'rgb(37, 184, 239)',
    },
    typography:{
        color: '#fff',
        marginBottom: '2.5vh',
        marginLeft: '20px',
    },
    typographyBig: {
        color: '#25b8ef',
        fontSize: '5vh',
        marginBottom: '50px',
        marginLeft: '19vw',
        "@media (max-width: 450px)" : {
            fontSize: '3.5vh',
        marginBottom: '30px',
        marginLeft: '2.5vw',
        }
    },
    image: {
        marginLeft: '40px', 
        width: '50%', 
        height: '50%',
        marginBottom: '5vh',
        "@media (max-width: 450px)" : {
            width: '80%', 
            height: '80%'
        },
        "@media (max-width: 650px)" : {
            width: '70%', 
            height: '70%'
        }
    },
    image2: {
        marginLeft: '30px', 
        width: '70%', 
        height: '70%',
        marginBottom: '5vh',
        "@media (max-width: 450px)" : {
            width: '80%', 
            height: '80%'
        },
        "@media (max-width: 650px)" : {
            width: '80%', 
            height: '80%'
        }
    },
    image3: {
        marginLeft: '40px', 
        width: '60%', 
        height: '60%',
        marginBottom: '5vh',
        "@media (max-width: 650px)" : {
            width: '75%', 
            height: '75%'
        },
        "@media (max-width: 450px)" : {
            width: '75%', 
            height: '75%'
        }
    },
    video: {
        width: '70%',
        height: '70%',
        marginLeft: '40px',
        marginBottom: '5vh',
        "@media (max-width: 450px)" : {
            width: '85%', 
            height: '85%',
            marginLeft: '20px'
        }
    },
    Icon: {
        marginLeft: '-15px', 
        fontWeight: '650',
        width: '45px',
        height: '45px',
        "@media (max-width: 650px)" : {
            width: '20px',
            height: '20px',
            marginLeft: '-15px'
        },
        "@media (max-width: 450px)" : {
            width: '18px',
            height: '18px',
            marginLeft: '-20px'
        }
    }


});