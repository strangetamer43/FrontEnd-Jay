import { makeStyles } from '@material-ui/core/styles';
import { autocompleteClasses } from '@mui/material';


export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    marginTop: '30px',
    marginLeft: '50px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '30px',
    height: '110%',
    width: '92.5%',
    
    backgroundColor: '#1a1a1a',
  },
  statsHeading: {
    fontSize: '2vh',
    color: '#25b8ef'
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'black',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
    color: 'white',
    "@media (max-width: 400px)" : {
      margin: '5px',
      display: 'flex',
      
      justifyContent: 'space-between',
    },
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    color: 'white',
    "@media (max-width: 920px)" : {
      marginLeft: '0px',
      marginBottom: '0px',
      marginRight: '30px',
      fontSize: '17px'
    },
    "@media (max-width: 400px)" : {
      marginLeft: '0px',
      marginBottom: '0px',
      marginRight: '0px',
      fontSize: '12px',
    },
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  image: {
    height: '15%',
    width: '15%',
    marginTop: '5px',
    marginLeft: '10px',
    marginRight: '10px',
    borderRadius: '100px',
    
  },
  details2: {
    display: 'flex',
    flexDirection: 'column',
    
    justifyContent: 'space-between',
    marginLeft: '65px',
    marginBottom: '20px',
    marginRight: '0px',
    fontSize: '18px',
 
  
    "@media (max-width: 808px)" : {
      marginLeft: '0px',
      marginBottom: '0px',
      marginRight: '-8px',
      fontSize: '14px',
    },
    "@media (max-width: 500px)" : {
      marginLeft: '0px',
      marginBottom: '0px',
      marginRight: '0px',
      justifyContent: 'space-between',
      fontSize: '8px',
    },
  },
  h5: {
    color: '#03dac6',
    fontSize: '5vh',
      fontWeight: '600',
    "@media (max-width: 1000px)" : {
      
      fontSize: '5vh',
      fontWeight: '600',
    },
    "@media (max-width: 500px)" : {
      
      fontSize: '18px',
    },

  },
  h6: {
    color: '#03dac6',
    fontSize: '3vh',
    "@media (max-width: 500px)" : {
      
      fontSize: '3.5vh',
    },
    "@media (max-width: 1000px)" : {
      
      fontSize: '16px',
    },

  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between', 
    alignItems: 'stretch',
    marginTop: '70px',
    marginLeft: '70px',
    marginRight: '50px',
    marginBottom: '-80px',
    "@media (max-width: 550px)" : {
      fontSize: '10px',
      display: 'flex',
      justifyContent: 'space-between', 
      alignItems: 'center',
      marginRight: '10px',
      marginTop: '35px',
    },
    "@media (max-width: 1100px)" : {
      display: 'flex',
      fontSize: '14px',
      justifyContent: 'space-between', 
      alignItems: 'stretch',
      marginRight: '75px',
      marginTop: '35px',
    },
  
  },
  button: {
    borderRadius: '13px',
    background: '#22262b',
    border: '3px solid #03dac6',
    color: '#03dac6',
    
    fontWeight: '550',
    fontSize: '15px',
    paddingTop: '0.6rem',
    paddingRight: '1rem', 
    outline: 'none',
    cursor: 'pointer',
    transition: '0.3s ease',
  
    "@media (max-width: 550px)" : {
      fontSize: '6px',
      paddingTop: '0.2rem',
      paddingRight: '0.5rem', 
      paddingLeft: '0rem',
    },
    "@media (max-width: 1100px)" : {
      fontSize: '14px',
      paddingTop: '0.2rem',
      paddingRight: '0.5rem', 
      paddingLeft: '0rem',
    },
  },
  divider: {
    color: 'white',
  },
  titles: {
    
    display: 'flex',
    justifyContent: 'space-evenly',
    color: 'white',
    "@media (max-width: 920px)" : {
      marginLeft: '0px',
      marginBottom: '0px',
      marginRight: '30px',
      fontSize: '17px'
    },
    "@media (max-width: 400px)" : {
      marginLeft: '0px',
      marginBottom: '0px',
      marginRight: '0px',
      fontSize: '12px',
    },
  }, 
  top5users: {
    marginTop: '15px',
    marginBottom: '5px',
    marginLeft: '-10px',
    marginRight: '10px',
    color: '#03dac6',
    listStyleType: 'none',
    display: 'flex',
    flexDirection: 'column',
}, 
ButtonP :{
  marginTop: '15px',
  paddingRight: '20px',
  background: '#25b8ef',
  color: '#121212',
  borderRadius: '15px',
  transition: '0.3s ease',
  
  
},
ButtonQ: {
  background: '#0c7ca6',
  marginTop: '15px',
  paddingRight: '20px',
  color: '#fff',
  borderRadius: '15px',
},
ButtonS :{
  background: '#07455d',
  marginTop: '15px',
  paddingRight: '20px',
  color: '#fff',
  borderRadius: 14,
   
  outline: 'none',
    cursor: 'pointer',
    transition: '0.3s ease', 
  
},

Modal: {
  backgroundColor: '#22262b',
  marginLeft: '700px',
  marginTop: '270px',
  marginRight: '700px',
  padding: '6vh',
  
},
statFunc: {
        height: '250px',
        width: '250px',
        marginLeft: '1180px',
        marginTop: '300px',
        position: 'fixed',
        zIndex: '10',
},
IntroHead: {
  marginLeft: '3vw',
  marginBottom: '1.5vh',
  color: '#25b8ef',
  fontSize: '3vh',
},
IntroPaper: {
  marginTop: '3vh',
  marginLeft: '2.6vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '30px',
  padding: '2vh',
  width: '92.5%',
  backgroundColor: '#1a1a1a',
},
Details: {
  display: 'flex',
  flexDirection: 'column',
    
  justifyContent: 'space-between',
},
smallDetails: {
  marginLeft: '3vw',
  marginBottom: '1vh',
  color: '#e2e2de',
  fontSize: '1.8vh',
},
IntroHead1: {
  marginRight: '3vw',
  marginBottom: '1.2vh',
  color: '#25b8ef',
  fontSize: '3vh',
},
});