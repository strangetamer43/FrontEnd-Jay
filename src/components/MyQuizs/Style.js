import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        flexGrow: 1
    },
    media: {
        height: 140,
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    backbtn: {
        marginRight: '0px'
    }
}));