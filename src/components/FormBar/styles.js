import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import { orange } from '@material-ui/core/colors';

export default makeStyles((theme) => ({

  formbar: {
    width: '100%',
  },
  post_button: {
    textAlign: 'center',
    margin: 'auto'
  },
  fabButton: {
    textAlign: 'center',
    margin: 'auto',
    marginTop: '60px',
    display: 'flex',
    color: theme.palette.getContrastText(blue['400']),
    backgroundColor: blue['400'],
    fontWeight: 600,
    boxShadow: '2px 2px 5px 2px rgba(5, 5, 10, 0.8), -2px -2px 5px 2px rgba(255, 255, 255, 0.40)',


  },
  fabButton1: {
    textAlign: 'center',
    margin: 'auto',
    marginTop: '60px',
    display: 'flex',
    color: theme.palette.getContrastText(blue['400']),
    backgroundColor: blue['400'],
    fontWeight: 600,
    boxShadow: '2px 2px 5px 2px rgba(5, 5, 10, 0.8), -2px -2px 5px 2px rgba(255, 255, 255, 0.40)',


  },
  fabButton2: {
    alignItems: 'center',
    marginTop: '60px',
    margin: 'auto',
    justifyContent: 'center',
    display: 'flex',

    color: theme.palette.getContrastText(blue['400']),
    backgroundColor: blue['400'],
    fontWeight: 600,
    boxShadow: '2px 2px 5px 2px rgba(5, 5, 10, 0.8), -2px -2px 5px 2px rgba(255, 255, 255, 0.40)',


  },
  fabButton3: {
    textAlign: 'center',
    margin: 'auto',
    marginTop: '60px',
    display: 'flex',
    color: theme.palette.getContrastText(blue['400']),
    backgroundColor: blue['400'],
    fontWeight: 600,
    boxShadow: '2px 2px 5px 2px rgba(5, 5, 10, 0.8), -2px -2px 5px 2px rgba(255, 255, 255, 0.40)',




  },
  fabButton4: {
    textAlign: 'center',
    margin: 'auto',
    marginTop: '60px',
    display: 'flex',
    color: theme.palette.getContrastText(blue['400']),
    backgroundColor: blue['400'],
    fontWeight: 600,
    boxShadow: '2px 2px 5px 2px rgba(5, 5, 10, 0.8), -2px -2px 5px 2px rgba(255, 255, 255, 0.40)',


  },

}));