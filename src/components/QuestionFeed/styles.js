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
        borderRadius: '30px',
        marginTop: '2rem',
        
        
        display: 'flex',
        flexDirection: 'column',
        justify: "space-between",
        padding: '10px',
        backgroundColor: '#1a1a1a',
        boxShadow: '-5px -5px 10px 5px rgba(255, 255, 255, 0.3), 5px 5px 10px 5px rgba(5, 5, 10, 0.7)',
    },
    gridConatainer: {
        
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column-reverse',
        },
    },
    searchBar: {
      borderRadius: '15px',
      border: '2px solid #25b8ef',
      width: '45vw',

    },
    searchButton: {
      width: '5vw',
        background: '#25b8ef',
        borderRadius: '15px',
        marginTop: '2vh',
        marginBottom: '1vh',
        fontSize: '2vh',
        width: '30vh',
        boxShadow: '-2.5px -2.5px 5px rgba(255, 255, 255, 0.30), 2.5px 2.5px 5px rgba(5, 5, 10, 0.7)',
        '&:hover':{
            borderRadius: '15px',
            marginBottom: '1vh',
            fontSize: '2vh',
            background: '#25b8ef',
            boxShadow: '2.5px 2.5px 6px rgba(255, 255, 255, 0.30), -2.5px -2.5px 6px rgba(5, 5, 10, 0.7)',
        }
    }
}));