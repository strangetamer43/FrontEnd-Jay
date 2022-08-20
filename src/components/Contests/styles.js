import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    marginLeft: '110px',
    "@media (max-width: 1100px)" : {
        marginLeft: '110px',   
        
      },
      "@media (max-width: 900px)" : {
        marginLeft: '100px',   
        
      },
      "@media (max-width: 600px)" : {
        marginLeft: '10px',   
        
      },
    
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