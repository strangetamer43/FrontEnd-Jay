import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    textAlign: 'center',
    margin: 'auto',

    "@media (min-width:1400)": {
      marginLeft: '130px',
      textAlign: 'center',
      margin: 'auto'
    },
    // Laptop media Query
    "@media (max-width: 1400px)": {
      marginLeft: '130px',
      textAlign: 'center',
      margin: 'auto'
    },

    // tablet media query
    "@media (max-width: 1000px)": {
      marginLeft: '150px',
      width: '500px',
      marginRight: '50px',
      textAlign: 'center',
      margin: 'auto'
    },
    // Mobile Media Query
    "@media (max-width: 768px)": {
      width: '450px',
      marginRight: '100px',
      textAlign: 'center',
      margin: 'auto'



    }

  },
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
}));