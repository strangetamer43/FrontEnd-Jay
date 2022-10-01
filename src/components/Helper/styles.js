import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme =>({
    paper:{
        marginTop: '250px',
        marginLeft: '740px',    
        padding: '20px',
        width: '40vh',
        position: 'absolute',
<<<<<<< HEAD
        backgroundColor: '#1a1a1a',
        "@media (max-width: 1024px)": {
            marginLeft: '250px',
        }
    },
    placeButtons: {
=======
        backgroundColor: '#1a1a1a', 
        [theme.breakpoints.down("xs")] : {
            marginTop: '150px',
            marginLeft: '40px',
            padding: '10px',
            width: '20vh',
            position: 'absolute',
            backgroundColor: 'red',
            
        },
        [theme.breakpoints.between("sm","md")] : {
            marginTop: '50px',
            marginLeft: '40px',
            padding: '10px',
            width: '20vh',
            position: 'absolute',
        },
        "@media(min-width: 1280px)": {
            marginTop: '280px',
            marginLeft: '7480px',
            padding: '30px',
            width: '50vh',
            position: 'absolute',
            backgroundColor: '#1a1a1a', 

        },

    }, placeButtons: {
>>>>>>> c933852ababd73f1556f325b8ed25f84a4b408f1
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    paperBig: {
        backgroundColor: '#22262b',
        marginTop: '150px',
        textAlign: 'center',
        justifyContent: 'center'
    },

    
    button: {
        marginLeft: '90vw',
        marginTop: '29vh',
        position: 'fixed',
        zIndex: '10',
        borderRadius: '50px',
        width: 60,
        height: 60,
        '&hover': {
            color: '#1a1a1a',
            background: 'linear-gradient(315deg, rgba(246,0,241,1) 5%, rgba(37,184,239,1) 100%)',
            boxShadow: '-2.5px -2.5px 6px rgba(5, 5, 10, 0.8), 2px 2px 5px rgba(255, 255, 255, 0.4)'
        },
    },
    buttons1: {
        border: '2px solid rgb(03, 218, 198)',
        marginTop: '5px',
        borderRadius: '10px',
        color: 'rgb(03, 218, 198)',
    },
    typography: {
        color: '#fff',
        marginBottom: '30px',
        marginLeft: '20px',
        fontFamily: "Times New Roman, Times, serif",
        [theme.breakpoints.between("sm","md")] : {
            marginTop: '25px',

        },
        
       
    },
    typographyBig: {
        color: '#25b8ef',
        fontSize: '35px',
<<<<<<< HEAD
        marginBottom: '50px',
        textAlign: 'center'
=======
        marginBottom: '30px',
        textAlign: 'center',
        [theme.breakpoints.down("xs")] : {
            fontSize: '30px',
            marginBottom: '105px',
            marginTop: '-75px',
            textAlign: 'center',

            
            
        },
        [theme.breakpoints.between("sm","md")] : {
            fontSize: '30px',
            marginBottom: '100px',
            textAlign: 'center',
            
        },
        
 
    },
    imgst:{
        width: '50%',
        height: '70%',
        justify: "center",
        marginLeft: "25%",
        [theme.breakpoints.down("xs")] : {
            width: '100%',
            height: '100%',
            marginLeft: '-1px',
            
            
        },
        [theme.breakpoints.between("sm","md")] : {
            
            width: '80%',
            height: '100%',
            marginLeft: '65px',

            
        },
        "@media(min-width: 1440px)": {
            width: '70%',
            height: '100%',
            marginLeft: '15%',

        },

>>>>>>> c933852ababd73f1556f325b8ed25f84a4b408f1
    }

}));
   
    

