import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '30px',
    marginTop: '4vh',
    marginLeft: '4vh',
    objectFit: 'cover',
    width: '95%',
    height: '95%',
    "@media (max-width: 1250px)" : {
      width: '95%',
      height: '95%',
      marginLeft: '2vw',
      marginTop: '2vh',
       
    },
    "@media (max-width: 960px)" : {
      width: '85%',
      height: '85%',
      marginLeft: '2vw',
      marginTop: '2vh',
       
    },
    "@media (max-width: 750px)" : {
      width: '85%',
      height: '85%',
      marginLeft: '2vw',
      marginTop: '2vh',
       
    },
    "@media (max-width: 550px)" : {
      width: '83%',
      height: '83%',
      marginLeft: '2vw',
      marginTop: '2vh',
       
    },
    "@media (max-width: 480px)" : {
      width: '90%',
      height: '90%',
      marginLeft: '2vw',
      marginTop: '1vh',
       
    },
    

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
    color: '#25b8ef',
    "@media (max-width: 780px)" : {
      fontSize: '3vh',
    },
    "@media (max-width: 600px)" : {
      fontSize: '2.5vh'
    },
    "@media (max-width: 480px)" : {
      fontSize: '2vh'
    },
  },
  time: {
    color: '#25b8ef',
    "@media (max-width: 780px)" : {
      fontSize: '1.5vh'
    },
    "@media (max-width: 480px)" : {
      fontSize: '1.15vh'
       
    },
  },
  tags: {
    fontSize: '2vh',
    
    marginBottom: '2vh',
    color: '#c935ff',
    "@media (max-width: 780px)" : {
      fontSize: '1.5vh',
    },
    "@media (max-width: 480px)" : {
      fontSize: '1.3vh'
    },
  },
  paper: {
    display: 'flex',
    padding: '20px', 
    borderRadius: '30px', 
    margin: '75px', 
    
    width: '92%',
    background: '#1a1a1a',
    flexDirection: 'column',
    boxShadow: '5px 5px 15px 5px rgba(5, 5, 10, 0.7), -5px -5px 15px 5px rgba(255, 255, 255, 0.3)',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
      
    },
    "@media (max-width: 1250px)" : {
      width: '90vw',
      marginLeft: '4.5vw',
      marginTop: '5vh',
      padding: '15px', 
    }
  },
  section: {
    
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    
  },
  name: {
     fontSize: '3vh',
     marginLeft: '1vw',
     color: '#25b8ef',
     "@media (max-width: 780px)" : {
      fontSize: '2vh',
      marginRight: '1vw'
    },
    "@media (max-width: 580px)" : {
      fontSize: '1.75vh'
       
    },

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
    color: '#e2e2de',
    
    "@media (max-width: 780px)" : {
      fontSize: '1.5vh'
    },
    "@media (max-width: 480px)" : {
      fontSize: '1.3vh',
      marginRight: '5vw',
    },
  }, 
  commentButton: {
    background: '#25b8ef',
    width: '10vw',
    height: '4vh',
    borderRadius: '15px',
    color: '1a1a1a',
    fontSize: '2vh',
    fontFamily: 'Montserrat, sans-serif',
    boxShadow: '-2px -2px 5px 2px rgba(255, 255, 255, 0.3), 2px 2px 5px 2px rgba(5, 5, 10, 0.7)',
    "@media (max-width: 780px)" : {
      fontSize: '1.5vh',
      width: '15vw',
      paddingLeft: '1vw'
       
    },
    "@media (max-width: 480px)" : {
      fontSize: '1.3vh',
      width: '18vw',
      paddingLeft: '1vw'
      
       
    },
  },
  comments: {
    fontFamily: 'Montserrat, sans-serif',
    color: '#25b8ef',
    fontSize: '2vh',
    "@media (max-width: 780px)" : {
      fontSize: '1.5vh'
    },
    "@media (max-width: 480px)" : {
      fontSize: '1.3vh' 
    },
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
    color: '#25b8ef',
    "@media (max-width: 480px)" : {
      fontSize: '1.5vh',
      margin: '1.25vh',
    },
  },
  recommendedName: {
    fontSize: '1.8vh',
    margin: '2vh',
    color: '#e2e2de',
    "@media (max-width: 480px)" : {
      fontSize: '1.25vh',
      margin: '1.25vh',
       
    },
  }, 
  upvotes: {
    color: '#25b8ef',
    "@media (max-width: 480px)" : {
      fontSize: '1vh',
       
    },
  },
  downvotes: {
    color: '#c935ff',
    "@media (max-width: 480px)" : {
      fontSize: '1vh', 
    },
  },
  commentOut: {
    width:'50vw',
    "@media (max-width: 780px)" : {
      width: '35vw',
      marginRight: '13vw'
      
      
       
    },
    "@media (max-width: 480px)" : {
      width: '30vw',
      marginRight: '10vw'
      
      
       
    },
  },
  recommendedContainer: {
    margin: '2vh' , 
    marginBottom: '4vh', 
    cursor: 'pointer', 
    background: '#303030', 
    borderRadius: '15px', 
    display: 'flex', 
    flexDirection: 'column', 
    boxShadow: '-3px -3px 8px 3px rgba(255,255,255,0.3), -3px -3px 8px 3px rgba(5,5,10,0.9)',
    "@media (max-width: 1400px)" : {
      width: '35vw',
      
      
      
       
    },
    "@media (max-width: 780px)" : {
      width: '50vw',
      
      
      
       
    },
    "@media (max-width: 480px)" : {
      width: '65vw',
      
      
      
       
    },
  }
}));
