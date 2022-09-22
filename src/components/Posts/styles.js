import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    marginLeft: '11vw',
    "@media (max-width: 1100px)" : {
        marginLeft: '110px',   
        
      },
      "@media (max-width: 900px)" : {
        marginLeft: '50px',   
        
      },
      "@media (max-width: 600px)" : {
        marginLeft: '50px',   
        
      },
      "@media (max-width: 450px)"  : {
        marginLeft: '30px',
      },
      "@media (max-width: 375px)" : {
        marginLeft: '80px',
      }
      
  },
  container1: {
    marginLeft: '7vw',
  },
  formbar: {
    marginLeft: '500px'
  },
  paper: {
    marginTop: '75px',
    marginLeft: '150px',
    
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
  gridContainer1 :{
    marginLeft: '1vw'
  }
}));