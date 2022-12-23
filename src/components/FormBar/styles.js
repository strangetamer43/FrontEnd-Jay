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
        marginLeft: '31vw',
        marginTop: '8vh',   
        
      },
      "@media (max-width: 900px)" : {
        marginLeft: '25vw',
        marginTop: '8vh',

        
      },
      "@media (max-width: 700px)" : {
        marginLeft: '25vw',
        marginTop: '3vh',
        fontSize: '1.5vh',
        padding: '2vh',
      },
      "@media (max-width: 600px)" : {
        marginLeft: '25vw',
        marginTop: '5vh',
        fontSize: '1.5vh',
        padding: '2vh',
      },
      "@media (max-width: 450px)" : {
        marginLeft: '15vw',
        marginTop: '5vh',
        fontSize: '1.5vh',
        padding: '1.5vh'
        
      },
    },
    fabButton1: {    
      marginLeft: '450px',
      marginTop: '-85px',
      borderRadius: '15px',
      boxShadow: '2px 2px 5px rgba(5, 5, 10, 0.8), -2px -2px 5px rgba(255, 255, 255, 0.20)',
      color: theme.palette.getContrastText(blue['400']),
      backgroundColor: blue['400'],
      
        "@media (max-width: 650px)" : {
          marginLeft: '25vw',
          marginTop: '8vh',
          fontSize: '1vh',
          padding: '1vh',
        },  
        "@media (max-width: 450px)" : {
          marginLeft: '27vw',
          marginTop: '-8vh',
          fontSize: '1vh',
          padding: '1vh',
          
          
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
    marginLeft: '25vw',
    marginTop: '8vh',
    fontSize: '1.5vh',
    padding: '2vh',
     
   },
   "@media (max-width: 400px)" : {
    marginLeft: '18vw',
    marginTop: '8vh',
    fontSize: '1.5vh',
    padding: '1.5vh'
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
    "@media (max-width: 1100px)" : {
      marginLeft: '15vw',
      marginTop: '4vh',   
      
    },
    "@media (max-width: 960px)" : {
      marginLeft: '40vw',
      marginTop: '4vh',
      
    },
    "@media (max-width: 900px)" : {
      marginLeft: '35vw',
      marginTop: '4vh',
      
    },
    "@media (max-width: 700px)" : {
     marginLeft: '35vw',
     marginTop: '4vh',
     fontSize: '1.5vh',
     padding: '2vh',
     marginBottom: '0vh'
      
    },
    "@media (max-width: 600px)" : {
      marginLeft: '32vw',
      marginBottom: '0vh',
      fontSize: '1.3vh',
      padding: '1vh',
      marginTop: '3vh'
     },
    "@media (max-width: 450px)" : {
     marginLeft: '28vw',
     marginBottom: '0vh',
     fontSize: '1.3vh',
     padding: '1vh',
     marginTop: '2.5vh'
    },
 },
}));