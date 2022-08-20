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
    appBarSearch: {
        borderRadius: 4,
        marginTop: '2rem',
        
        
        display: 'flex',
        flexDirection: 'column',
        justify: "space-between",
        padding: '10px',
        backgroundColor: '#fdf4dc',
    },
    gridConatainer: {
        
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column-reverse',
        },
    },
}));