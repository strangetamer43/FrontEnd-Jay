import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import purple from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    }

}));