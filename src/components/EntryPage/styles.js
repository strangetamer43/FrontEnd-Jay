import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    leftSide: {
        marginTop: '15vh',
        marginLeft: '5vw',
        width: '50vw',
    },
    rightSide: {
        marginTop: '10vh',
        
        width: '50vw',
    },
    challenges:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '20px'
    }, 
    topButtons: {
        marginTop: '40px',
        marginLeft: '75vw'
    },
    backgroundBox: {
        border: '60px solid rgba(255, 255, 255, 0.05)',
        
        borderRadius: '30px',
        
        height: '400px',
        width: '400px',
        marginTop: '42vh',
        marginLeft: '15vw', 
        
    },
    Squares: {
        background: 'rgba(255, 255, 255, 0.15)',
        borderRadius: '50px',
        marginTop: '50vh',
        marginLeft: '35vw',
        width: '100px',
        height: '100px',
        
    },
    Squares1: {
        background: 'rgba(255, 255, 255, 0.15)',
        marginTop: '50vh',
        
        borderRadius: '50px',
        marginLeft: '2.5vw',
        width: '100px',
        height: '100px',
        
    },
    Squares2: {
        background: 'rgba(255, 255, 255, 0.05)',
        
        
        borderRadius: '48px',
        
        width: '96px',
        height: '96px',
        
    },
    text:{
        color: '#ffffff',
        fontfamily: 'Montserrat, sans-serif',
        fontWeight: '600'
    }
   
});