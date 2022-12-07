import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(0),
    },
  },

  paper: {
    padding: '3vh',
    backgroundColor: '#1a1a1a',
    borderRadius: '30px',
    width: '50vw',
    textAlign: 'center',
    margin: 'auto',
    justifyContent: 'center',
    "@media (min-width:1400)": {

    },
    // Laptop media Query
    "@media (max-width: 1400px)": {

    },

    // tablet media query
    "@media (max-width: 1000px)": {

    },
    // Mobile Media Query
    "@media (max-width: 768px)": {
      width: '80vw'
    }

  },
  Field: {
    border: '1px solid #25b8ef',
    borderRadius: '15px',
    marginBottom: '1vh',
    boxShadow: '-1px -1px 2px 1px rgba(255, 255, 255, 0.4), 1px 1px 2px 1px rgba(5, 5, 10, 0.6)',
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
    marginLeft: '-15vw'

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
    textAlign: 'center',
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
    }
  },
  ButtonC: {
    background: '#c935ff',
    marginLeft: '7vw',
    padding: '1vh',
    textAlign: 'center',
    borderRadius: '15px',
    color: '#1a1a1a',
    fontSize: '2vh',
    fontFamily: 'Montserrat, sans-serif',
    cursor: 'pointer',
    border: '0px',
    boxShadow: '-2px -2px 4px 2px rgba(255, 255, 255, 0.3), 2px 2px 5px 2px rgba(5, 5, 10, 0.6)',
    '&:hover': {
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
    }
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

  },
  buttonClear: {
    marginTop: '2vh',
    background: '#c935ff',
    fontSize: '2vh',
    borderRadius: '15px',
    marginLeft: '5vw',
    textAlign: 'center'

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