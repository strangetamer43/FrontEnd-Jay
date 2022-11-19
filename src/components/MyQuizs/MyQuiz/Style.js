import { makeStyles } from "@material-ui/core";
import { blue } from '@material-ui/core/colors';

export default makeStyles((theme) =>
({
    root: {
        maxWidth: 345,
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    },

    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },


    media: {
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
    },
    border: {
        border: 'solid',
    },
    fullHeightCard: {
        height: '100%',
    },
    card: {
        margin: '0 auto',
        float: 'none',
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        background: '#1a1a1a',
        borderRadius: '15px',
        height: '100%',
        width: '80%',
        position: 'relative',
        flex: 'center',
        boxShadow: '-5px -5px 15px 5px rgba(255, 255, 255, 0.25), 5px 5px 15px 5px rgba(5, 5, 10, 0.75)',


    },
    overlay: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
    },
    overlay2: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: 'white',
    },
    grid: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
    },
    title: {
        padding: '0 16px',
        color: 'white',
        fontSize: '3.5vh'
    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    cardButton: {
        display: "block",
        textAlign: "initial"
    },
    yesbutton: {
        background: '#25b8ef',
        borderRadius: '15px',
        color: '#000000',
        boxShadow: '-1.5px -1.5px 3px 1.5px rgba(255, 255, 255, 0.25), 1.5px 1.5px 3px 1.5px rgba(5, 5, 10, 0.75)',
        '&:hover': {
            background: '#25b8ef',
            borderRadius: '15px',
            color: '#000000',
            boxShadow: '1.5px 1.5px 3px 1.5px rgba(255, 255, 255, 0.25), -1.5px -1.5px 3px 1.5px rgba(5, 5, 10, 0.75)',
        }
    },
    nobutton: {
        background: '#ac23e5',
        borderRadius: '15px',
        boxShadow: '-1.5px -1.5px 3px 1.5px rgba(255, 255, 255, 0.25), 1.5px 1.5px 3px 1.5px rgba(5, 5, 10, 0.75)',
        '&:hover': {
            background: '#ac23e5',
            borderRadius: '15px',
            color: '#000000',
            boxShadow: '1.5px 1.5px 3px 1.5px rgba(255, 255, 255, 0.25), -1.5px -1.5px 3px 1.5px rgba(5, 5, 10, 0.75)',
        }
    },
    name: {
        fontSize: '2.5vh',
    },
    time: {
        marginTop: '1vh',
        fontSize: '1.5vh',
        marginLeft: '2.8vw'
    },
    KPcount: {
        fontSize: '2.5vh',
        padding: '1vh'

    },
    KPnumber: {
        border: '0.25vw solid rgba(255, 255, 255, 0.6)',
        borderRadius: '3vh',
        boxShadow: '1.5px 1.5px 2.5px rgba(5, 5, 10, 0.8), -1.5px -1.5px 2.5px rgba(255, 255, 255, 0.20), inset 1.5px 1.5px 2.5px rgba(5, 5, 10, 0.8), inset -1.5px -1.5px 2.5px rgba(255, 255, 255, 0.20)',
    },
    tags: {
        fontSize: '2vh'
    },
    buttons: {
        width: '15vw',
        height: '4vh',
        fontSize: '2vh'
    },
    fabButton: {
        textAlign: 'center',
        margin: '30px',
        display: 'flex',
        color: theme.palette.getContrastText(blue['400']),
        backgroundColor: blue['400'],
        fontWeight: 600,
        borderRadius: "10px",
        boxShadow: '2px 2px 5px 2px rgba(5, 5, 10, 0.8), -2px -2px 5px 2px rgba(255, 255, 255, 0.40)',


    },


})
);
