import { makeStyles } from '@material-ui/core/styles';
import { autocompleteClasses } from '@mui/material';

export default makeStyles({



card: {
    marginTop: '50px',
    marginLeft: '50px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    width: '92.5%',
    position: 'relative',
    backgroundColor: '#22262b',
  },
content: {
    marginLeft: '30px',
    marginRight: '30px',
},  
title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
},
about:{
    fontWeight: '550', 
    marginLeft: "38vh", 
    color: 'white',
    "@media (max-width: 1024px)" : {
        fontWeight: '550', 
        marginLeft: "10vh", 
        color: 'white',
    }
}

});