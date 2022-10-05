import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({

    appBarSearch: {
        borderRadius: '30px',
        marginTop: '6vh',


        display: 'flex',
        flexDirection: 'column',
        margin: '8vw',
        marginBottom: '2vh',
        padding: '1vw',
        backgroundColor: '#1a1a1a',
        boxShadow: '-2.5px -2.5px 6px 2.5px rgba(255, 255, 255, 0.25), 2.5px 2.5px 6px 2.5px rgba(5, 5, 10, 0.75)',
    },
    gridConatainer: {

        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column-reverse',
        },
    },
    searchButton: {
        width: '10vw',
        background: '#25b8ef',
        borderRadius: '15px',
        marginTop: '2vh',
        marginBottom: '1vh',
        fontSize: '2vh',
        width: '30vh',
        boxShadow: '-2.5px -2.5px 5px rgba(255, 255, 255, 0.30), 2.5px 2.5px 5px rgba(5, 5, 10, 0.7)',
        '&:hover': {
            borderRadius: '15px',
            marginBottom: '1vh',
            fontSize: '2vh',
            background: '#25b8ef',
            boxShadow: '2.5px 2.5px 6px rgba(255, 255, 255, 0.30), -2.5px -2.5px 6px rgba(5, 5, 10, 0.7)',
        }

    },
    searchBar: {
        borderRadius: '15px',
        color: '#25b8ef',
        border: '2px solid rgba(37, 184, 239, 1)',
    }
}));