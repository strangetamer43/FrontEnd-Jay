import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(0),
    },
  },
  
  paper: {
    
    padding: '3vh',
    marginTop: '20vh',
    marginLeft: '15vh',
    position: 'absolute',
    backgroundColor: '#1a1a1a',
    borderRadius: '30px',
    
    width: '50vw',
    position: 'absolute',
    "@media (max-width: 1100px)" : {
      marginLeft: '10vh',
      marginTop: '15vh',
      width: '70vw',
    },
    "@media (max-width: 900px)" : {
      marginLeft: '7.5vh',
      marginTop: '15vh',
      width: '70vw',
    },
    "@media (max-width: 750px)" : {
      marginLeft: '4vh',
      marginTop: '15vh',
      width: '80vw',
    },
    "@media (max-width: 600px)" : {
      marginLeft: '3.5vh',
      marginTop: '15vh',
      width: '80vw',
    },
    "@media (max-width: 450px)" : {
      marginLeft: '3vh',
      marginTop: '15vh',
      width: '80vw',
    },
  },
  Field: {
    border: '1px solid #25b8ef',
    borderRadius: '15px',
    marginBottom: '1vh',
    boxShadow: '-1px -1px 2px 1px rgba(255, 255, 255, 0.4), 1px 1px 2px 1px rgba(5, 5, 10, 0.6)',
    "@media (max-width: 600px)" : {
      padding: '-3vh'
      
    },
    "@media (max-width: 430px)" : {
      padding: '-5vh'
      
    },
    
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    marginLeft: '8.5vw',
    marginTop: '1vh',
    marginBottom: '1vh',
    display: 'flex',
    
    
  },
  buttonSubmit: {
    marginTop: '2vh',
    background: '#25b8ef',
    fontSize: '2vh',
    borderRadius: '15px',
    marginLeft: '-15vw',
    "@media (max-width: 450px)" : {
      marginTop: '3vh',
      marginLeft: '1vw',
      fontSize: '1vh',
      paddingRight: '4vw'
    },

  },
  formTitle: {
    fontSize: '3vh',
    marginTop: '0vh',
    color: '#25b8ef', marginBottom: '2vh'
  },
  ButtonS: {
    background: '#25b8ef',
    borderRadius: '15px',
    color: '#1a1a1a',
    marginLeft: '-12vw',
    fontSize: '2vh',
    fontFamily: 'Montserrat, sans-serif',
    cursor: 'pointer',
    border: '0px',
    padding: '1vh',
    boxShadow: '-2px -2px 5px 2px rgba(255, 255, 255, 0.4), 2px 2px 5px 2px rgba(5, 5, 10, 0.6)',
    '&:hover': {
      background: '#25b8ef',
      borderRadius: '15px',
      color: '#1a1a1a',
      marginLeft: '-12vw',
      fontSize: '2vh',
      fontFamily: 'Montserrat, sans-serif',
      cursor: 'pointer',
      border: '0px',
      padding: '1vh',
      boxShadow: '2px 2px 5px 2px rgba(255, 255, 255, 0.4), -2px -2px 5px 2px rgba(5, 5, 10, 0.6)',
    },
    "@media (max-width: 600px)" : {
      
      
      fontSize: '1.5vh',
      padding: '0.75vh',
      boxShadow: '-1px -1px 2.5px 1px rgba(255, 255, 255, 0.3), 1px 1px 2.5px 1px rgba(5, 5, 10, 0.7)',
      '&:hover': {
        
        
        fontSize: '1.5vh',
       
        
        padding: '0.75vh',
        boxShadow: '1px 1px 2.5px 1px rgba(255, 255, 255, 0.3), -1px -1px 2.5px 1px rgba(5, 5, 10, 0.7)',
      }
    },
  },
  ButtonC: {
    background: '#c935ff',
    marginLeft: '7vw',
    padding: '1vh',
    
    borderRadius: '15px',
    color: '#1a1a1a',
    fontSize: '2vh',
    fontFamily: 'Montserrat, sans-serif',
    cursor: 'pointer',
    border: '0px',
    boxShadow: '-2px -2px 4px 2px rgba(255, 255, 255, 0.3), 2px 2px 5px 2px rgba(5, 5, 10, 0.6)',
    '&:hover':{
      background: '#c935ff',
      marginLeft: '7vw',
      padding: '1vh',
    
      borderRadius: '15px',
      color: '#1a1a1a',
      fontSize: '2vh',
      fontFamily: 'Montserrat, sans-serif',
      cursor: 'pointer',
      border: '0px',
      boxShadow: '2px 2px 4px 2px rgba(255, 255, 255, 0.3), -2px -2px 5px 2px rgba(5, 5, 10, 0.6)',
    },
    "@media (max-width: 600px)" : {
      
      
      fontSize: '1.5vh',
      padding: '0.75vh',
      boxShadow: '-1px -1px 2.5px 1px rgba(255, 255, 255, 0.3), 1px 1px 2.5px 1px rgba(5, 5, 10, 0.7)',
      '&:hover': {
        
        
        fontSize: '1.5vh',
       
        
        padding: '0.75vh',
        boxShadow: '1px 1px 2.5px 1px rgba(255, 255, 255, 0.3), -1px -1px 2.5px 1px rgba(5, 5, 10, 0.7)',
      }
    },
  },
  paperP: {
    
    padding: '3vh',
    marginTop: '10vh',
    marginLeft: '15vh',
    position: 'absolute',
    backgroundColor: '#1a1a1a',
    borderRadius: '30px',
    
    width: '50vw',
    position: 'absolute',
    "@media (max-width: 1100px)" : {
      marginLeft: '10vh',
      marginTop: '15vh',
      width: '70vw',
    },
    "@media (max-width: 900px)" : {
      marginLeft: '7.5vh',
      marginTop: '15vh',
      width: '70vw',
    },
    "@media (max-width: 750px)" : {
      marginLeft: '4vh',
      marginTop: '15vh',
      width: '80vw',
    },
    "@media (max-width: 600px)" : {
      marginLeft: '3.5vh',
      marginTop: '5vh',
      width: '80vw',
    },
    "@media (max-width: 450px)" : {
      marginLeft: '3vh',
      marginTop: '5vh',
      width: '80vw',
    },
    
  },
  buttonClear: {
    marginTop: '2vh',
    background: '#c935ff',
    fontSize: '2vh',
    borderRadius: '15px',
    marginLeft: '5vw',
    "@media (max-width: 450px)" : {
      marginTop: '3vh',
      fontSize: '1vh',
      paddingRight: '4vw'
    },

  },
  buttonsBelow: {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginLeft: '-15vw',
    marginTop: '3vh',
    "@media (max-width: 600px)" : {
      
      marginLeft: '-7vw',
      marginTop: '3vh'
      
    },
    "@media (max-width: 600px)" : {
      
      marginLeft: '-7vw',
      marginTop: '3vh'
      
    },
    
  },
  videIcon: {
    color: '#25b8ef', 
    cursor: 'pointer', 
    marginLeft: '75px',
    "@media (max-width: 650px)" : {
      
      marginLeft: '45px',
      
      
    },
    "@media (max-width: 450px)" : {
      
      marginLeft: '35px',
      
      
    },
  },
  label: {
    "@media (max-width: 900px)" : {
      fontSize: '2.0vh',
      
      
    },
    "@media (max-width: 650px)" : {
      fontSize: '1.8vh',
      
      
    },
    "@media (max-width: 450px)" : {
      fontSize: '1.5vh',
      
      
    },
   
  },
  choice: {
    fontSize: '1.8vh', 
    color: '#c935ff',
    marginTop: '1vh',
    "@media (max-width: 650px)" : {
      fontSize: '1.2vh',
      
      
    },
    "@media (max-width: 450px)" : {
      fontSize: '1.1vh',
      
      
    },
  },
  Or: {
    color: '#c935ff', 
    marginLeft: '2vw',
    "@media (max-width: 650px)" : {
      marginLeft: '10vw',
      
      
    },
    "@media (max-width: 450px)" : {
      marginLeft: '10vw',
      
      
    },
  },
  smallDetails: {
    marginLeft: '3vw',
    marginBottom: '1vh',
    color: '#e2e2de',
    fontSize: '1.8vh',
  },
  editButton: {
    color: "white",
    '&:hover': {
      cursor: "pointer",
      // backgroundColor: '#1a1a1e',
      width: '30px',
      height: '30px',
      backgroundColor: '#262626',
      boxShadow: '10px - 10px  rgba(0,0,0,0.6)- moz - box - shadow: 10px - 10px  rgba(0, 0, 0, 0.6)- webkit - box - shadow: 10px - 10px  rgba(0, 0, 0, 0.6)- o - box - shadow: 10px - 10px  rgba(0, 0, 0, 0.6)',
      borderRadius: '100px',
    },
    textAlign: "right",
    marginLeft: "auto",
    marginRight: '5px'

  },
}));