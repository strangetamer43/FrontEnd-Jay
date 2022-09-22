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
   
    width: '92%',
    background: '#1a1a1a',
    flexDirection: 'column',
    marginBottom: '2vh',
    boxShadow: '5px 5px 15px 5px rgba(5, 5, 10, 0.75), -5px -5px 15px 5px rgba(255, 255, 255, 0.25)',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
      
    },
  },
  section: {
    
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    
  },
  title: {
    marginTop: '1.5vh',
    fontSize: '4vh',
    color: '#25b8ef'
  },
  tags: {
    fontSize: '2vh',
    
    marginBottom: '2vh',
    color: '#c935ff'
  },
  imageSection: {
    marginLeft: '20px',
    width: '80%',
    height: '80%',
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
    background: '#1a1a1a', marginTop: '30vh'
  },
  commentsOuterContainer: {
    display: 'flex', justifyContent: 'space-between',
  },
  commentsInnerContainer: {
    height: '200px', overflowY: 'auto', marginRight: '30px',
  },
  pre: {
    whiteSpace: 'pre-wrap',
    fontSize: '1.8vh',
    marginBottom: '2vh',
    color: '#e2e2de'
  }, 
  button: {
    background: '#1a1a1a',
    border: '0',
    fontFamily: 'Montserrat, sans-serif',
  },
  name: {
    fontSize: '3vh',
    marginLeft: '1vw',
    color: '#25b8ef'

 },
 commentField:{
  borderRadius: '15px',
  border: '2px solid rgb(37, 184, 239)',
  marginTop: '1vh',
  outline: '0px',
  boxShadow: '-1px -1px 2.5px 1px rgba(255, 255, 255, 0.3), 1px 1px 2.5px 1px rgba(5, 5, 10, 0.9)',

},
time: {
  color: '#25b8ef'
},
comments: {
  fontFamily: 'Montserrat, sans-serif',
  color: '#25b8ef',
  fontSize: '2vh',
  marginBottom: '2vh'
},
 commentButton: {
  background: '#25b8ef',
  width: '10vw',
  height: '4vh',
  borderRadius: '15px',
  color: '1a1a1a',
  fontSize: '2vh',
  fontFamily: 'Montserrat, sans-serif',
  boxShadow: '-2px -2px 5px 2px rgba(255, 255, 255, 0.3), 2px 2px 5px 2px rgba(5, 5, 10, 0.7)'
},
}));