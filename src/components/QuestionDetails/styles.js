import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    
    

},

  media2: {
    borderRadius: '5px',  
    objectFit: 'scale-down',
    width: '15vh',
    height: '15vh%',
    
  },
  paper: {
    display: 'flex',
   
    width: '100%',
    
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
      
    },
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  imageSection: {
    marginLeft: '20px',
    width: '40%',
    height: '40%',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  recommendedQuestions: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  loadingPaper: {
    display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '15px', height: '39vh',
  },
  commentsOuterContainer: {
    display: 'flex', justifyContent: 'space-between',
  },
  commentsInnerContainer: {
    height: '200px', overflowY: 'auto', marginRight: '30px',
  },
}));