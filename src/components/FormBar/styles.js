import { makeStyles } from '@material-ui/core/styles';
import { cyan } from '@material-ui/core/colors';
import { orange } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    fabButton: {    
       marginLeft: '31vw',
       marginTop: '8vh',
       color: theme.palette.getContrastText(cyan['A200']),
       backgroundColor: cyan['A200'],
       fontWeight: 600,
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
      borderRadius: '10px',
      color: theme.palette.getContrastText(cyan['A200']),
      backgroundColor: cyan['A200'],
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
}));