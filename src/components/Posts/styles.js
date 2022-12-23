import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    marginLeft: '11vw',
    "@media (max-width: 1100px)" : {
        marginLeft: '10vw',   
        
      },
      "@media (max-width: 900px)" : {
        marginLeft: '10vw',   
        
      },
      "@media (max-width: 600px)" : {
        width: '85vw',
        marginLeft: '2vw'
      },
      "@media (max-width: 450px)"  : {
        width: '90vw',
        marginLeft: '1vw'
      },
      "@media (max-width: 375px)" : {
        width: '90vw',
        marginLeft: '1vw'
      }
      
  },
  container1: {
    marginLeft: '7vw',
    "@media (max-width: 900px)" : {
      marginLeft: '10vw',   
      
    },
    "@media (max-width: 650px)" : {
      width: '85vw',
      marginLeft: '2vw'
    },
    "@media (max-width: 450px)"  : {
      width: '90vw',
      marginLeft: '-5vw'
    },
    "@media (max-width: 375px)" : {
      width: '90vw',
      marginLeft: '1vw'
    }
    
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