import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    paper: {
        width: '100%',
        background: '#1a1a1a',
        borderRadius: '30px',
        marginBottom: '7.5vh',
        marginTop: '5vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '3rem',
        marginLeft: '20rem',
        boxShadow: '-5px -5px 15px 5px rgba(255, 255, 255, 0.25), 5px 5px 15px 5px rgba(5,5,10,0.7)',
 
      },
    
    heading: {
        fontSize: '3vh',
        color: '#25b8ef',
        marginBotton: '5px',
        textAlign: 'center',
        padding: '28px',
        borderRadius: '13px',
        marginTop: '5px',
        [theme.breakpoints.down("s")] : {
            fontSize: '13px',
            textAlign: 'center',   
         },
         [theme.breakpoints.between("sm","md")] : {
            fontSize: '18px',
         },
         "@media(min-width: 1200px)": {
           fontSize: '25px',
           marginTop: '-30px',
 
         },

    },
    description: {
        fontSize: '2vh',
        color: '#ededed',
        marginTop: '18px',
        
    },
    button: {
        background: '#25b8ef',
        marginTop: '2vh',
        padding: '1vh',
        fontSize: '2vh',
        border: '0px',
        borderRadius: '15px',
        marginBottom:'2vh',
        width: '8vw',
        boxShadow: '-2.5px -2.5px 5px rgba(255, 255, 255, 0.30), 2.5px 2.5px 5px rgba(5, 5, 10, 0.7)',
        '&:hover':{
            background: '#25b8ef',
        marginTop: '20vh',
        padding: '1vh',
        fontSize: '2vh',
        border: '0px',
        borderRadius: '15px',
        marginBottom:'2vh',
        width: '10vw',
            
            boxShadow: '2.5px 2.5px 6px rgba(255, 255, 255, 0.30), -2.5px -2.5px 6px rgba(5, 5, 10, 0.7)',
        },
        [theme.breakpoints.up("xs")] : {
            width: '86px',
        },
        [theme.breakpoints.between("sm","md")] : {
            fontSize: '13px',
            width: '86px',
         },

    },
   
    field: {
        borderRadius: '15px',
        border: '1px solid #25b8ef',
        boxShadow: '-2px -2px 6px 2px rgba(255, 255, 255, 0.25), 2px 2px 6px 2px rgba(5, 5, 10, 0.75)',
        width: '35rem',
        
    },

}));