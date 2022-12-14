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
    padding: '1.5vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '30px',
    height: '110%',
    width: '92.5%',
    boxShadow: '3px 3px 10px 3px rgba(5, 5, 10, 0.75), -3px -3px 10px 3px rgba(255, 255, 255, 0.25)',
    backgroundColor: '#1a1a1a',
    "@media (max-width: 450px)" : {
      marginLeft: '0vw',
      
    },
    "@media (max-width: 650px)" : {
      marginLeft: '4vw',
      
    },

  },
  statsHeading: {
    fontSize: '3vh',
    color: '#25b8ef',
    marginLeft: '2vh'
  },
  statsCard: {
    marginLeft: '4vw',
    marginTop: '3vh',
    background: '#1a1a1a',
    padding: '3vh',
    
    borderRadius: '30px',
    boxShadow: '5px 5px 12px rgba(5, 5, 10, 0.8), -5px -5px 10px rgba(255, 255, 255, 0.20)',
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
    boxShadow: '3px 3px 10px 3px rgba(5, 5, 10, 0.75), -3px -3px 10px 3px rgba(255, 255, 255, 0.25)',
    "@media (max-width: 650px)" : {
      boxShadow: '1.25px 1.25px 4px 1.25px rgba(5, 5, 10, 0.75), -1.25px -1.25px 4px 1.25px rgba(255, 255, 255, 0.25)',
    },
    "@media (max-width: 450px)" : {
      boxShadow: '1.25px 1.25px 4px 1.25px rgba(5, 5, 10, 0.75), -1.25px -1.25px 4px 1.25px rgba(255, 255, 255, 0.25)',
      height: '25%',
      width: '25%',
    },
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
    color: '#25b8ef',
    fontSize: '5vh',
      fontWeight: '600',
      
    "@media (max-width: 1000px)" : {
      
      fontSize: '5vh',
      fontWeight: '600',
    },
    "@media (max-width: 650px)" : {
      
      fontSize: '2.5vh',
    },
    "@media (max-width: 650px)" : {
      
      fontSize: '2vh',
    },

  },
  h6: {
    color: '#25b8ef',
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
    marginBottom: '-10px',
    "@media (max-width: 550px)" : {
      marginTop: '0px',
      marginLeft: '5vw',
      marginRight: '0px',
      marginBottom: '0px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between', 
      alignItems: 'center',
      
    },
    "@media (max-width: 450px)" : {
      marginLeft: '5vw',
      marginRight: '0px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between', 
      alignItems: 'center',
      
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
    borderRadius: '15px',
    background: '#1a1a1a',
    border: '3px solid #25b8ef',
    color: '#25b8ef',
    
    fontWeight: '600',
    fontSize: '1.8vh',
    fontFamily: 'Montserrat, sans-serif',
    padding: '1.2vh', 
    outline: 'none',
    cursor: 'pointer',
    transition: '0.3s ease',
    boxShadow: '2.5px 2.5px 6.5px rgba(5, 5, 10, 0.75), -2.5px -2.5px 6.5px rgba(255, 255, 255, 0.25)',
    
    "@media (max-width: 650px)" : {
      fontSize: '1vh',
      padding: '1vh',
      marginLeft: '10vw',
      
      border: '1.5px solid #25b8ef',
      boxShadow: '1.5px 1.5px 4.5px rgba(5, 5, 10, 0.75), -1.5px -1.5px 4.5px rgba(255, 255, 255, 0.25)',
    },
    "@media (max-width: 450px)" : {
      fontSize: '1vh',
      padding: '0.8vh',
      marginLeft: '10vw',
      width: '30vw',
      border: '1px solid #25b8ef',
      boxShadow: '1.5px 1.5px 4.5px rgba(5, 5, 10, 0.75), -1.5px -1.5px 4.5px rgba(255, 255, 255, 0.25)',
    },
  },
  buttonRight: {
    borderRadius: '15px',
    background: '#1a1a1a',
    border: '3px solid #25b8ef',
    color: '#25b8ef',
    
    fontWeight: '600',
    fontSize: '1.8vh',
    fontFamily: 'Montserrat, sans-serif',
    padding: '1.2vh', 
    outline: 'none',
    cursor: 'pointer',
    transition: '0.3s ease',
    boxShadow: '2.5px 2.5px 6.5px rgba(5, 5, 10, 0.75), -2.5px -2.5px 6.5px rgba(255, 255, 255, 0.25)',
    "@media (max-width: 450px)" : {
      fontSize: '1vh',
      padding: '1vh',
      marginLeft: '20vw',
      border: '1px solid #25b8ef',
      boxShadow: '1.5px 1.5px 4.5px rgba(5, 5, 10, 0.75), -1.5px -1.5px 4.5px rgba(255, 255, 255, 0.25)',
    },
    "@media (max-width: 650px)" : {
      fontSize: '1vh',
      padding: '1vh',
      marginLeft: '20vw',
      border: '1.5px solid #25b8ef',
      boxShadow: '1.5px 1.5px 4.5px rgba(5, 5, 10, 0.75), -1.5px -1.5px 4.5px rgba(255, 255, 255, 0.25)',
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
  color: '#1a1a1a',
  borderRadius: '15px',
  transition: '0.3s ease',
  boxShadow: '2px 2px 5px rgba(5, 5, 10, 0.75), -2px -2px 5px rgba(255, 255, 255, 0.25)',
  '&:hover': {
    boxShadow: '2px 2px 5px rgba(250, 250, 255, 0.25), -2px -2px 5px rgba(5, 5, 10, 0.75)',
    background: '#25b8ef',
    marginTop: '15px',
    paddingRight: '20px',
    color: '#1a1a1a',
    borderRadius: '15px',
   
    outline: 'none',
  },
},
ButtonQ: {
  background: '#0c7ca6',
  marginTop: '15px',
  paddingRight: '20px',
  color: '#e2e2de',
  borderRadius: '15px',
  boxShadow: '2px 2px 5px rgba(5, 5, 10, 0.75), -2px -2px 5px rgba(255, 255, 255, 0.25)',
  '&:hover': {
    boxShadow: '2px 2px 5px rgba(250, 250, 255, 0.25), -2px -2px 5px rgba(5, 5, 10, 0.75)',
    background: '#0c7ca6',
    marginTop: '15px',
    paddingRight: '20px',
    color: '#e2e2de',
    borderRadius: '15px',
   
    outline: 'none',
  },
},
ButtonS :{
  background: '#07455d',
  marginTop: '15px',
  paddingRight: '20px',
  color: '#e2e2de',
  borderRadius: '15px',
   
  outline: 'none',
  cursor: 'pointer',
  transition: '0.3s ease', 
  boxShadow: '2px 2px 5px rgba(5, 5, 10, 0.75), -2px -2px 5px rgba(255, 255, 255, 0.25)',
  '&:hover': {
    boxShadow: '2px 2px 5px rgba(250, 250, 255, 0.25), -2px -2px 5px rgba(5, 5, 10, 0.75)',
    background: '#07455d',
    marginTop: '15px',
    paddingRight: '20px',
    color: '#e2e2de',
    borderRadius: '15px',
   
    outline: 'none',
  },
},

Modal: {
  backgroundColor: '#22262b',
  marginLeft: '700px',
  marginTop: '270px',
  marginRight: '700px',
  padding: '6vh',
  borderRadius: '30px',

  
},
Modal1: {
  backgroundColor: '#22262b',
  marginLeft: '700px',
  marginTop: '200px',
  marginRight: '700px',
  padding: '6vh',
  borderRadius: '30px',

  
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
  "@media (max-width: 650px)" : {
    fontSize: '2.5vh'
    
  },
  "@media (max-width: 450px)" : {
    fontSize: '1.5vh'
    
  },
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
  boxShadow: '5px 5px 12px rgba(5, 5, 10, 0.8), -5px -5px 10px rgba(255, 255, 255, 0.20)',
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
  "@media (max-width: 450px)" : {
    fontSize: '1vh',
    
  },
  "@media (max-width: 650px)" : {
    fontSize: '1.25vh',
    
  },
},
smallDetails1: {
  marginLeft: '3vw',
  marginBottom: '1vh',
  color: '#e2e2de',
  fontSize: '1.8vh',
  display: 'flex',
  flexDirection: 'column',
  "@media (max-width: 450px)" : {
    fontSize: '1vh',
    
  },
  "@media (max-width: 650px)" : {
    fontSize: '1.25vh',
    
  },
},
IntroHead1: {
  marginRight: '3vw',
  marginBottom: '1.2vh',
  color: '#25b8ef',
  fontSize: '3vh',
  "@media (max-width: 650px)" : {
    fontSize: '2.5vh'
    
  },
  "@media (max-width: 450px)" : {
    fontSize: '1.5vh'
    
  },
},
email: {
  marginLeft: '1vw',
  color: '#25b8ef',
  marginBottom: '2vh',
  fontSize: '3vh',
  marginTop: '1.5vh',
  "@media (max-width: 650px)" : {
    fontSize: '2.5vh'
    
  },
  "@media (max-width: 450px)" : {
    fontSize: '1.5vh'
    
  },
}, 
number: {
  marginRight: '3vw',
  marginBottom: '2vh',
  color: '#25b8ef',
  fontSize: '3vh',
  marginTop: '1.5vh',
  "@media (max-width: 1100px)" : {
    fontSize: '3vh'
    
  },
  "@media (max-width: 650px)" : {
    fontSize: '2.5vh'
    
  },
  "@media (max-width: 450px)" : {
    fontSize: '1.5vh'
    
  },
},
frequencyDet: {
  color: '#25b8ef',
  marginBottom: '1vh',
  fontSize: '2vh',
},
headerPoints: {
  marginRight: '1.5vw', 
  display: 'flex', 
  flexDirection: 'row', 
  justifyContent: 'flex-start'
},
kpFirst: {
  color: '#25b8ef', 
  fontSize: '3.8vh',
  
  "@media (max-width: 1100px)" : {
    fontSize: '3vh'
    
  },
  "@media (max-width: 900px)" : {
    fontSize: '2.5vh'
    
  },
  "@media (max-width: 750px)" : {
    fontSize: '2.5vh',
    marginTop: '2vh',
  },
  "@media (max-width: 550px)" : {
    fontSize: '2.5vh',
    marginTop: '2vh',
  },
},
kpSecond: {
  color: '#25b8ef', 
  fontSize: '3.8vh',
  alignItems: 'center',
  "@media (max-width: 1100px)" : {
    fontSize: '3vh'
    
  },
  "@media (max-width: 900px)" : {
    fontSize: '2.5vh'
    
  },
  "@media (max-width: 750px)" : {
    fontSize: '2.5vh',
    marginTop: '2vh',
    
  },
  "@media (max-width: 550px)" : {
    fontSize: '2.5vh',
    marginTop: '2vh',
    
  },
},
KPdetails: {
  color: '#25b8ef', 
  fontSize: '4vh',
  "@media (max-width: 650px)" : {
    fontSize: '2.5vh',
    
    
  },
  "@media (max-width: 450px)" : {
    fontSize: '1.5vh',
    
    
  },
},
KPdiv: {
  border: '3px solid #25b8ef', 
  borderRadius: '15px', 
  width: '10.5vw', 
  boxShadow: '3px 3px 7.5px rgba(5, 5, 10, 1), -3px -3px 7.5px rgba(255, 255, 255, 0.3), inset 3px 3px 7.5px rgba(5, 5, 10, 1), inset -3px -3px 7.5px rgba(255,255,255,0.3)',
  "@media (max-width: 450px)" : {
    width: '15vw',
    border: '1.5px solid #25b8ef',
    boxShadow: '1.5px 1.5px 3.5px rgba(5, 5, 10, 1), -1.5px -1.5px 3.5px rgba(255, 255, 255, 0.3), inset 1.5px 1.5px 3.5px rgba(5, 5, 10, 1), inset -1.5px -1.5px 3.5px rgba(255,255,255,0.3)',
    padding: '1vh',
  },
  "@media (max-width: 650px)" : {
    width: '15vw',
    border: '2px solid #25b8ef',
    boxShadow: '1.5px 1.5px 3.5px rgba(5, 5, 10, 1), -1.5px -1.5px 3.5px rgba(255, 255, 255, 0.3), inset 1.5px 1.5px 3.5px rgba(5, 5, 10, 1), inset -1.5px -1.5px 3.5px rgba(255,255,255,0.3)',
    padding: '0.3vh',
  },
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
modalSize: {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: '30%',


},

});