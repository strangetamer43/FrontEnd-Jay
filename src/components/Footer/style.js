import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    footer: {
        marginBottom: '0px',
        background: '#1a1a1a',
        width: '100%',
        padding: '7vw'
    },
    section:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    links: {
        color: '#ffffff',
        marginTop: '2vh',
        "@media (max-width: 450px)":{
            fontSize: '1vh'
        },
    },
    text: {
        fontSize: '2.5vh',
        color: '#25b8ef',
        "@media (max-width: 450px)":{
            fontSize: '1.5vh'
        },
    },
    miniText: {
        color: '#ffffff',
        fontSize: '1.2vh',
        marginLeft: '38vw',
        marginTop: '10vh',
        "@media (max-width: 450px)":{
            marginLeft: '20vw',
            marginTop: '6.5vh'
        },
    },
    icons: {
        marginLeft: '2.5vw'
    }
}));