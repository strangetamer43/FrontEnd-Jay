import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
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
  },
  Field: {
    border: '1px solid #25b8ef',
    borderRadius: '15px'
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
    marginBottom: 10,
  },
  formTitle: {
    fontSize: '2vh',
    marginTop: '1vh'
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
    border: '0px'
  },
}));