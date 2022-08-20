import { makeStyles } from '@material-ui/core/styles';


export default makeStyles({
    paper: {
        marginTop: '250px',
        marginLeft: '740px',
        padding: '20px',
        width: '40vh',
        position: 'absolute',
        backgroundColor: '#22262b',
        "@media (max-width: 1024px)" : {
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
    },
    button: {
        marginLeft: '1000px',
        marginTop: '300px',
        position: 'fixed',
        zIndex: '10',
        borderRadius: '50px',
        width: 60,
        height: 60,
    },
    buttons1 : {
        border: '2px solid rgb(03, 218, 198)',
        marginTop: '5px',
        borderRadius: '10px',
        color: 'rgb(03, 218, 198)',
    },
    typography:{
        color: '#fff',
        marginBottom: '30px',
        marginLeft: '20px',
    },
    typographyBig: {
        color: '#03dac6',
        fontSize: '35px',
        marginBottom: '50px',
        marginLeft: '350px',
    }

});