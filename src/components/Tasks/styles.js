import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({

    paper: {
        background: '#1a1a1a',
        borderRadius: '30px',
        marginBottom: '7.5vh',
        marginTop: '5vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '3vh',
        marginLeft: '10vw',
        marginRight: '10vw',
        boxShadow: '-5px -5px 15px 5px rgba(255, 255, 255, 0.25), 5px 5px 15px 5px rgba(5,5,10,0.7)',
        justifyContent: 'center'
    },
    heading: {
        fontSize: '3vh',
        color: '#25b8ef',
        marginBottom: '2vh',
        textAlign: 'center'
    },
    description: {
        fontSize: '2vh',
        color: '#ededed'
    },
    button: {
        background: '#25b8ef',
        marginTop: '2vh',
        padding: '1vh',
        fontSize: '2vh',
        border: '0px',
        borderRadius: '15px',
        marginBottom: '2vh',
        width: '12vw',
        boxShadow: '-2.5px -2.5px 5px rgba(255, 255, 255, 0.30), 2.5px 2.5px 5px rgba(5, 5, 10, 0.7)',
        '&:hover': {
            background: '#25b8ef',
            marginTop: '2vh',
            padding: '1vh',
            fontSize: '2vh',
            border: '0px',
            borderRadius: '15px',
            marginBottom: '2vh',
            width: '12vw',

            boxShadow: '2.5px 2.5px 6px rgba(255, 255, 255, 0.30), -2.5px -2.5px 6px rgba(5, 5, 10, 0.7)',
        }
    },
    field: {
        borderRadius: '15px',
        border: '2px solid #25b8ef',
        boxShadow: '-2px -2px 6px 2px rgba(255, 255, 255, 0.25), 2px 2px 6px 2px rgba(5, 5, 10, 0.75)',

    }
}));