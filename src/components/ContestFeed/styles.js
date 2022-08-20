import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    
    appBarSearch: {
        borderRadius: 4,
        marginTop: '2rem',
        marginBottom: '1rem',
        
        display: 'flex',
        flexDirection: 'column',
        justify: "space-between",
        padding: '10px',
        backgroundColor: '#fdf4dc',
    },
    gridConatainer: {
        
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column-reverse',
        },
    },
}));