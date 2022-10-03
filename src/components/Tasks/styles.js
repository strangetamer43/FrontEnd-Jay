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
        boxShadow: '-5px -5px 15px 5px rgba(255, 255, 255, 0.25), 5px 5px 15px 5px rgba(5,5,10,0.7)',
        justifyContent: 'center',
        textAlign: 'center'
    },
    heading: {
        fontSize: '3vh',
        color: '#25b8ef',
        marginBottom: '5vh',
        textAlign: 'center',
        padding: '10px',
        "@media (min-width:1400)": {
            marginBottom: '5vh',

        },
        // Laptop media Query
        "@media (max-width: 1400px)": {
            marginBottom: '5vh',

        },

        // tablet media query
        "@media (max-width: 1000px)": {
            marginBottom: '5vh',

        },
        // Mobile Media Query
        "@media (max-width: 768px)": {
            marginBottom: '5vh',
        }
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
        textAlign: 'center',
        justifyContent: 'center'


    },
    Container: {
        textAlign: 'center',
        justifyContent: 'center',
        marginLeft: '30px',
        marginRight: '30px'
    }
}));