import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import { orange } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    fabButton: {    
       marginLeft: '31vw',
       marginTop: '4vh',
       color: theme.palette.getContrastText(blue['400']),
       backgroundColor: blue['400'],
       fontWeight: 600,
       boxShadow: '2px 2px 5px 2px rgba(5, 5, 10, 0.8), -2px -2px 5px 2px rgba(255, 255, 255, 0.40)',
       "@media (max-width: 1100px)" : {
        marginLeft: '35vw',
        marginTop: '8vh',   
        
      },
      "@media (max-width: 900px)" : {
        marginLeft: '35vw',
        marginTop: '8vh',
        
      },
      "@media (max-width: 700px)" : {
        marginLeft: '35vw',
        marginTop: '8vh',
        
      },
      "@media (max-width: 400px)" : {
        marginLeft: '35vw',
        marginTop: '8vh',
        
      },
    },
    fabButton1: {    
      marginLeft: '450px',
      marginTop: '-85px',
      borderRadius: '15px',
      boxShadow: '2px 2px 5px rgba(5, 5, 10, 0.8), -2px -2px 5px rgba(255, 255, 255, 0.20)',
      color: theme.palette.getContrastText(blue['400']),
      backgroundColor: blue['400'],
      '&:hover': {
        boxShadow: '2px 2px 5px rgba(250, 250, 255, 0.20), -2px -2px 5px rgba(5, 5, 10, 0.8)',
        backgroundColor: blue['400'],
        marginLeft: '450px',
        marginTop: '-85px',
        
        color: '#e2e2de',
        borderRadius: '15px',
       
        outline: 'none',
      },
      "@media (max-width: 1100px)" : {
       marginLeft: '370px',
       marginTop: '-50px',   
       
     },
     "@media (max-width: 900px)" : {
       marginLeft: '260px',
       marginTop: '-50px',
       
     },
     "@media (max-width: 700px)" : {
       marginLeft: '120px',
       marginTop: '-35px',
       
     },
     "@media (max-width: 400px)" : {
       marginLeft: '35px',
       marginTop: '-35px',
       
     },
   },
   fabButton2: {    
    marginLeft: '17vw',
    marginTop: '4vh',
    color: theme.palette.getContrastText(blue['400']),
    backgroundColor: blue['400'],
    fontWeight: 600,
    boxShadow: '2px 2px 5px rgba(5, 5, 10, 0.8), -2px -2px 5px rgba(255, 255, 255, 0.20)',
    "@media (max-width: 1100px)" : {
     marginLeft: '35vw',
     marginTop: '8vh',   
     
   },
   "@media (max-width: 900px)" : {
     marginLeft: '35vw',
     marginTop: '8vh',
     
   },
   "@media (max-width: 700px)" : {
     marginLeft: '35vw',
     marginTop: '8vh',
     
   },
   "@media (max-width: 400px)" : {
     marginLeft: '35vw',
     marginTop: '8vh',
     
   },
 },
 fabButton3: {
      marginLeft: '36vw',
       marginTop: '4vh',
       color: theme.palette.getContrastText(blue['400']),
       backgroundColor: blue['400'],
       fontWeight: 600,
       boxShadow: '2px 2px 5px 2px rgba(5, 5, 10, 0.8), -2px -2px 5px 2px rgba(255, 255, 255, 0.40)',
 },
 fabButton4: {
    marginLeft: '19vw',
    marginTop: '6vh',
    marginBottom:'2vh',
    color: theme.palette.getContrastText(blue['400']),
    backgroundColor: blue['400'],
    fontWeight: 600,
    boxShadow: '2px 2px 5px rgba(5, 5, 10, 0.8), -2px -2px 5px rgba(255, 255, 255, 0.20)',
 }
}));