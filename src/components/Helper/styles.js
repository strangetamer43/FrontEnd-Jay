import { makeStyles } from '@material-ui/core/styles';


export default makeStyles({
    paper: {
        marginTop: '250px',
        marginLeft: '740px',
        padding: '20px',
        width: '40vh',
        position: 'absolute',
        backgroundColor: '#1a1a1a',
        "@media (max-width: 1024px)": {
            marginLeft: '250px',
        }
    },
    placeButtons: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    paperBig: {
        backgroundColor: '#22262b',
        marginTop: '150px',
        textAlign: 'center',
        justifyContent: 'center'
    },
    button: {
        marginLeft: '90vw',
        marginTop: '29vh',
        position: 'fixed',
        zIndex: '10',
        borderRadius: '50px',
        width: 60,
        height: 60,
        '&hover': {
            color: '#1a1a1a',
            background: 'linear-gradient(315deg, rgba(246,0,241,1) 5%, rgba(37,184,239,1) 100%)',
            boxShadow: '-2.5px -2.5px 6px rgba(5, 5, 10, 0.8), 2px 2px 5px rgba(255, 255, 255, 0.4)'
        },
    },
    buttons1: {
        border: '2px solid rgb(03, 218, 198)',
        marginTop: '5px',
        borderRadius: '10px',
        color: 'rgb(03, 218, 198)',
    },
    typography: {
        color: '#fff',
        marginBottom: '30px',
        marginLeft: '20px',
    },
    typographyBig: {
        color: '#25b8ef',
        fontSize: '35px',
        marginBottom: '50px',
        textAlign: 'center'
    }

});