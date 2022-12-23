import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: '50px',
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '500px',
  },
  headerLogo: {
    objectFit: 'contain',
    marginLeft: '10vw', 
    width: '2.5vw', 
    height: '2.75vw',
    "@media (max-width: 650px)" : {
      objectFit: 'contain',
      width: '5.5vw', 
      height: '5.75vw',
    },
    "@media (max-width: 450px)" : {
      objectFit: 'contain',
      width: '5.5vw', 
      height: '5.75vw',
      marginLeft: '0'
    },
},
  toolbar: {
    display: 'flex',
    borderRadius: '50px',
    
    
  },
  header:{
  display:'flex',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    background: '#00ffff',
    justifyContent: 'space-between',
    borderBottomLeftRadius: '30px',
    borderBottomRightRadius: '30px',
    boxShadow: '2.5px 2.5px 6px rgba(5, 5, 10, 0.8), -2.5px -2.5px 6px rgba(255, 255, 255, 0.20)',
    zIndex: '-1',
    marginTop: '0',
    "@media (max-width: 650px)" : {
      display:'flex',
      alignItems: 'center',
      backgroundColor: '#1a1a1a',
      background: '#00ffff',
      width: '100vw',
      justifyContent: 'space-between',
      borderBottomLeftRadius: '30px',
      borderBottomRightRadius: '30px',
      boxShadow: '1.5px 1.5px 4px rgba(5, 5, 10, 0.8), -1.5px -1.5px 4px rgba(255, 255, 255, 0.20)',
      zIndex: '-1',
      marginTop: '0',
    },
    "@media (max-width: 450px)" : {
      display:'flex',
      alignItems: 'center',
      backgroundColor: '#1a1a1a',
      background: '#00ffff',
      width: '100vw',
      justifyContent: 'space-between',
      borderBottomLeftRadius: '30px',
      borderBottomRightRadius: '30px',
      boxShadow: '1.5px 1.5px 4px rgba(5, 5, 10, 0.8), -1.5px -1.5px 4px rgba(255, 255, 255, 0.20)',
      zIndex: '-1',
      marginTop: '0',
    },
  },
  profile: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '265px',
    "@media (max-width: 650px)" : {
      width: '30vw'
    },
    "@media (max-width: 450px)" : {
      width: '20vw'
    },
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    color: '#e2e2de',
    "@media (max-width: 650px)" : {
      fontSize: '10px', 
      color: '#e2e2de',
      display: 'flex',
      alignItems: 'center',
      display: 'none',
    },

  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    borderRadius: '30px',
    background: '#8AFF8A',
    border: '0px solid #22262b',
    color: '#121212',
    
    fontWeight: '550',
    fontSize: '15px',
    paddingTop: '0.6rem',
    paddingRight: '1rem', 
    outline: 'none',
    cursor: 'pointer',
    transition: '0.3s ease',
    "@media (max-width: 650px)" : {
      borderRadius: '15px',
    background: '#009E60',
    border: '0px solid #022658',
    color: '#fff',
    
    fontWeight: '550',
    fontSize: '12px',
    paddingTop: '0.3rem',
    paddingRight: '0.7rem', 
    paddingLeft:'0rem',
    outline: 'none',
    cursor: 'pointer',
    transition: '0.3s ease',  
      
    },
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    boxShadow: '1.5px 1.5px 2.5px rgba(5, 5, 10, 0.8), -1.5px -1.5px 2.5px rgba(255, 255, 255, 0.20)'
  },
}));