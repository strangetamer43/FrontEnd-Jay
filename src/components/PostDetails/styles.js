import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '30px',
    marginTop: '4vh',
    marginLeft: '4vh',
    objectFit: 'cover',
    width: '95%',
    height: '95%',
    
    

},

  media2: {
    borderRadius: '5px',  
    objectFit: 'scale-down',
    width: '20vh',
    height: '20vh',
    marginLeft: '2vw',
    marginRight: '2vw'
    
  },
  title: {
    marginTop: '1.5vh',
    fontSize: '4vh',
    color: '#25b8ef'
  },
  time: {
    color: '#25b8ef'
  },
  tags: {
    fontSize: '2vh',
    
    marginBottom: '2vh',
    color: '#c935ff'
  },
  paper: {
    display: 'flex',
   
    width: '92%',
    background: '#1a1a1a',
    flexDirection: 'column',
    boxShadow: '5px 5px 15px 5px rgba(5, 5, 10, 0.7), -5px -5px 15px 5px rgba(255, 255, 255, 0.3)',
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
  name: {
     fontSize: '3vh',
     marginLeft: '1vw',
     color: '#25b8ef'

  },
  imageSection: {
    margin: '3vw',
    height: '50vh',
    width: '75vw',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: 'inline-block',
    
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
    },
  },
  loadingPaper: {
    display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '30px', height: '39vh',
    marginTop: '25vh',
    background: '#1a1a1a'
  },
  commentsOuterContainer: {
    display: 'flex', justifyContent: 'space-between',
  },
  commentsInnerContainer: {
    height: '30vh', overflowY: 'auto', marginRight: '4vw', width: '40vw',
    
  },
  commentField:{
    borderRadius: '15px',
    border: '2px solid rgb(37, 184, 239)',
    outline: '0px',
    boxShadow: '-1px -1px 2.5px 1px rgba(255, 255, 255, 0.3), 1px 1px 2.5px 1px rgba(5, 5, 10, 0.9)',

  },
  nameDet: {
    display: 'flex',
    direction: "row",
    justifyContent: "flex-start",
    margin: '0px',
    marginRight: '5px',
  },
  pre: {
    whiteSpace: 'pre-wrap',
    fontSize: '1.8vh',
    marginBottom: '2vh',
    color: '#e2e2de'
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
  comments: {
    fontFamily: 'Montserrat, sans-serif',
    color: '#25b8ef',
    fontSize: '2vh'
  },
  nameComments: {
    fontWeight: '700'
  }, 
  button: {
    background: '#1a1a1a',
    border: '0',
    fontFamily: 'Montserrat, sans-serif',
  },
  recommendedTitle: {
    fontSize: '2.3vh',
    margin: '2vh',
    color: '#25b8ef'
  },
  recommendedName: {
    fontSize: '1.8vh',
    margin: '2vh',
    color: '#e2e2de'
  }, 
  upvotes: {
    color: '#25b8ef'
  },
  downvotes: {
    color: '#c935ff'
  }
}));
