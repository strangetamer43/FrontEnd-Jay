import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({

    large: {
        fontSize: '2.5vh',
        color: '#ffffff',
        marginTop: '2vh',
        marginLeft: '3vw',
        marginRight: '3vw'
    },
    medium:{
        fontSize: '2vh',
        color: '#ffffff',
        marginTop: '2vh',
        marginLeft: '3vw',
        marginRight: '3vw'
    },
    small:{
        fontSize: '1.5vh',
        color: '#ffffff',
        marginTop: '2vh',
        marginLeft: '3vw',
        marginRight: '3vw'
    },
    extraLarge: {
        fontSize: '3vh',
        color: '#ffffff',
        marginLeft: '45vw',
        marginTop: '2vh'
    },
    rights: {
        fontWeight: '700',
        marginTop: '5vh'
    },
    paper: {
        background: '#1a1a1a',
        marginTop: '2vh',
        marginBottom:'2vh'
    },
    button: {
        background: 'linear-gradient(35deg, rgba(143,5,227,1) 0%, rgba(6,131,255,1) 100%)',
    },
    heading: {
        color: '#25b8ef',
        fontSize: '2.5vh',
        marginBottom: '2vh',
        marginLeft: '35vw'
    },
    Field: {
        border: '2px solid rgb(37, 184, 239)',
        borderRadius: '15px'
    }
}));